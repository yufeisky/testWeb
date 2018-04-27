import React from 'react';
// import '@a/style/antd.scss';
import {Toast} from 'antd-mobile';
import store from '@/utils/store.js';
import px2rem from '@a/js/px2rem.js';
import WebUploader from '@cp/WebUploader/index.jsx';
import {getSearchParam} from '@a/js/utils.js';
import client from '@lizhife/client';
import Button from '@cp/Button/index.jsx';
import {anchorVerify} from '@a/js/api.js';
const njId = getSearchParam('njId') || ''; // 主播id
var isLizhi = client.isLizhiFM();


class Step3 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            belongArr:['householdRegisterMainUrl','householdRegisterGuardianUrl','householdRegisterNjUrl']
        };
    }
    componentDidMount() {
        var test = store.getState('test')
        console.log('test',test)
    }
    showAction(res) {
        console.log('store',store)
    }
    checkIsReady(){
        let self = this;
        let { belongArr } = this.state;
        let isReady = true;
        belongArr.forEach(function(k,v){
            if(!store.getState(k)){
                isReady = false;
            }
        })
        return isReady;
    }
    action(a){
        //点击下一步 要先校验上传成功与否
        let self = this;
        let isReady = this.checkIsReady();
        if(isReady){
            let info = store.state;
            console.log(info)
            anchorVerify(info).then((res)=>{
                console.log(res)
                if(res.code===0){
                    self.props.history.push('/step4')
                }else{
                    alert(res.msg)
                }
            })
        }else{
            Toast.info('请上传照片...',2)
        }
        console.log('isReady',isReady)
    }
    render() {
        let _style ={
            padding:'0 24px 80px 24px'
        }
        return (
            <div style={_style}>
                <WebUploader 
                    btnId="picker1" 
                    title={'居民户口簿户主页'} 
                    uploaderConfig={{server: 'url', pick: '#pick', auto: true}} 
                    styleConfig={{width: '327px',height:'200px'}}
                    belong="householdRegisterMainUrl"
                    showAction={this.showAction.bind(this)}
                    />
                <WebUploader 
                    btnId="picker2" 
                    title={'居民户口簿个人页（监护人）'} 
                    uploaderConfig={{server: 'url', pick: '#pick', auto: true}} 
                    styleConfig={{width: '327px',height:'200px'}}
                    belong="householdRegisterGuardianUrl"
                    showAction={this.showAction.bind(this)}
                />
                <WebUploader 
                    btnId="picker3" 
                    title={'居民户口簿个人页（主播）'} 
                    uploaderConfig={{server: 'url', pick: '#pick', auto: true}} 
                    styleConfig={{width: '327px',height:'200px'}}
                    belong="householdRegisterNjUrl"
                    showAction={this.showAction.bind(this)}
                    />
                <Button name="提交审核" txt="3/3" callBack={this.action.bind(this)}/>
            </div>
            
        );
    }
}

export default Step3;