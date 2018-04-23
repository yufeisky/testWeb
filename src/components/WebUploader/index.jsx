import React from 'react';
import PropTypes from 'prop-types';
import Style from './index.scss';
// import $ from '@/utils/jquery-1.10.2.min.js';
// import  '@/utils/webuploader.html5only.js';
// window.$ = $;
// import WebU from '@utils/webuploader.html5only.js';
// import WebU from '../../utils/webuploader.html5only.js';
// const WebUploader = require("./webuploader.js").WebUploader;
// const WebU = require('../../utils/webuploader.html5only.js');
class WebUploaderCom extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // init()
    }
    init(){
        // this.WU = new WebUploader.create({
        //     pick: {
        //         id: '#filePicker',
        //         label: '点击选择图片'
        //     },
        //     dnd: '#uploader .queueList',
        //     paste: document.body,
        //     auto:true,
        //     accept: {
        //         title: 'Images',
        //         extensions: 'gif,jpg,jpeg,bmp,png',
        //         mimeTypes: 'image/*'
        //     },
    
        //     // swf文件路径
        //     // swf: BASE_URL + '/js/Uploader.swf',
    
        //     disableGlobalDnd: true,
    
        //     chunked: true,
        //     // server: 'http://webuploader.duapp.com/server/fileupload.php',
        //     // server: 'http://2betop.net/fileupload.php',
        //     server: 'http://api.upalapp.com/util/uploadFile',
        //     fileNumLimit: 3,
        //     fileSizeLimit: 500 * 1024 * 1024, // 200 M
        //     fileSingleSizeLimit: 50 * 1024 * 1024 // 50 M
        // });
        // this.WU.on('filesQueued', files => {
        //     let initfiles = files.map(file => {
        //         this.setState({[file.id] : 0});
        //         return new Promise((resolve, reject) => {
        //             this.WU.makeThumb(file, (error, ret) => {
        //                 if (error) {
        //                 } else {
        //                     file.preview = ret;
        //                 }
        //                 resolve();
        //             }, this.props.styleConfig.width || 240, (this.props.styleConfig.width * 1.25) || 300);
        //         });
        //     });
        //     Promise.all(initfiles).then(()=>{
        //         let newList = this.state.fileList.concat(files);
        //         this.setState({fileList: newList});
        //     });
        // });
        // this.WU.on('uploadProgress', (file, percentage) => {
        //     this.setState({[file.id]: percentage});
        // });
        // this.WU.on('uploadComplete', file => {
        //     this.updateQueue();
        // });
    }
    render(){
        return(
             <div id="uploader" className="wu-example">
                <div className="queueList">
                    <div id="dndArea" className="placeholder">
                        <div id="filePicker"></div>
                        <p>或将照片拖到这里，单次最多可选300张</p>
                    </div>
                </div>
                <div className="statusBar" >
                    <div className="progress">
                        <span className="text">0%</span>
                        <span className="percentage"></span>
                    </div>
                    <div className="info"></div>
                    <div className="btns">
                        <div id="filePicker2"></div>
                        <div id="filePicker3">继续上传3</div>
                        <div className="uploadBtn">开始上传</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WebUploaderCom;