import React from 'react';
import PropTypes from 'prop-types';
// import jquery from '@/utils/jquery.min.js';
// window.jQuery = window.$ = jquery;
// import '@/utils/webuploader.min.js';
import store from '@/utils/store.js';
import {BASE_HOST} from '@/utils/config.js';
import '@a/style/upload.css';
import Style from './index.scss';
import mark from './mark.png';
class WebUploaderCom extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            percentage:0,
            imgSrc:null,
            errorText:null
        }
    }
    componentDidMount() {
        this.init();
        this.setImg();
    }
    setImg(){
        let self = this;
        let {belong} = self.props;
        let imgSrc = store.getState(belong);
        if(imgSrc){
            self.setState({
                imgSrc
            })            
        }
    }
    updateStore(type){
        let {belong,showAction} = this.props;
        let filesState = store.getState('filesState')||{};
        switch(type){
            case 'start':
                let imgSrc = store.getState(belong);
                if(imgSrc){
                    store.setState(belong,null); 
                }
                filesState[belong]='start';
                store.setState('filesState',filesState);
            return;
            case 'end':
                filesState[belong]='end';
                store.setState('filesState',filesState); 
                showAction(belong);
            return;
        }
    }
    init() {
        let self = this;
        let {title,btnId,styleConfig,belong,showAction} = this.props;
        this.uploader = new WebUploader.create({

            // 选完文件后，是否自动上传。
            auto: true,

            // swf文件路径 swf: BASE_URL + '/js/Uploader.swf', 文件接收服务端。
            // server: 'http://api.upalapp.com/util/uploadFile',
            server: `${BASE_HOST}/api/v1/picture/upload`,

            // 选择文件的按钮。可选。 内部根据当前运行是创建，可能是input元素，也可能是flash.
            pick: {
                id: `#${btnId}`,
                innerHTML: `<span style="color:#ffffff"></span>`,
                multiple: false //是否开起同时选择多个文件能力
            },

            accept: {
                title: 'Images',
                extensions: 'gif,jpg,jpeg,bmp,png',
                mimeTypes: 'image/*'
            },
            compress:{
                quality: 10,
                crop: false
            },
            fileSingleSizeLimit:5* 1024 * 1024,
            // resize: false,
            // compress: false,
            // sendAsBinary: true, //二进制的流的方式发送文件
            fileNumLimit:10,
            // duplicate: true
        });
        // 当有文件添加进来的时候
        this
            .uploader
            .on('fileQueued', function (file) {
                // console.log(file);
                self.updateStore('start');
                console.log('store',store)     
                self
                    .uploader
                    .makeThumb(file, function (error, src) {
                        if (error) {
                            $img.replaceWith('<span>不能预览</span>');
                            return;
                        }

                      self.setState({
                            imgSrc:src
                      })
                    }, parseInt(styleConfig.width), parseInt(styleConfig.height));
            });

        // 文件上传过程中创建进度条实时显示。
        self
            .uploader
            .on('uploadProgress', function (file, percentage) {
               self.setState({
                percentage,
                errorText:null
               })
            });

        // 文件上传成功，给item添加成功class, 用样式标记上传成功。
        self
            .uploader
            .on('uploadSuccess', function (file, response) {
                if (response.code===0 &&response.data) {
                    let url = response.data;
                    store.setState(belong,url);
                    self.updateStore('end');
                }else{
                    self.setState({
                        errorText:'上传失败'
                    })
                }
            });

        // 文件上传失败，显示上传出错。
        self
            .uploader
            .on('uploadError', function (file) {
                self.setState({
                    errorText:'上传失败'
                })
            });

        // 完成上传完了，成功或者失败，先删除进度条。
        self
            .uploader
            .on('uploadComplete', function (file) {
               
            });

        self
            .uploader
            .on('error', function (handler) {
                if (handler == "Q_EXCEED_NUM_LIMIT") {
                    uploader.reset();
                }
                if (handler == "F_DUPLICATE") {
                    alert("文件重复");
                }
                if(handler=="F_EXCEED_SIZE"){
                    alert('上传文件超出限制')
                }
            });
    }
    retry(){
        this.uploader.retry();
        this.setState({
            errorText:null
        })
    }
    render() {
        let {percentage,imgSrc,errorText} = this.state;
        let {btnId,styleConfig,title} = this.props;
        let bar_width= percentage*100;
        let barStyle={
            width:bar_width+'%'
        }
        console.log('btnId',btnId)
        return (
            <div className="uploader-wrap">
                <div className={Style.title}>{title}</div>
                <div id="uploader" className={Style.uploader} style={styleConfig}>
                    {imgSrc?<div id="thelist" className="pp p_img uploader-list">
                        <img className={Style.photo} src={imgSrc} alt=""/>
                        <img className={Style.mark} src={mark} alt=""/>
                    </div>:<span className={Style.tipText}>上传照片</span>}
                    <div id={btnId} className={Style.selectBtn}>
                    </div>
                    {
                        percentage>0 && percentage<1 ?
                        <div className={Style.progress}>
                            <div className={Style.precentage} style={barStyle}>{percentage}</div>
                        </div>
                        :null
                    }
                    {errorText ? <div className={Style.error}><div>{errorText}</div><div onClick={this.retry.bind(this)}>重新提交</div></div>:null}
                </div>
            </div>
        )
    }
}

export default WebUploaderCom;