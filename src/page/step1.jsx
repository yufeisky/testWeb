import React from 'react';

import { browserHistory } from 'react-router';
import store from '@/utils/store.js';
// import '@a/style/antd.scss';
import {Toast} from 'antd-mobile';
import px2rem from '@a/js/px2rem.js';
import WebUploader from '@cp/WebUploader/index.jsx';
import {getSearchParam} from '@a/js/utils.js';
import client from '@lizhife/client';
import Button from '@cp/Button/index.jsx';

var isLizhi = client.isLizhiFM();

class Step1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            belongArr:['guardianIdFrontUrl','guardianIdBackUrl']
        };

       
    }
    componentDidMount() {
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
            self.props.history.push('/step2')
            console.log(store);
        }else{
            Toast.info('请上传照片...',2)
        }
        console.log('isReady',isReady)
    }
    showAction(belong){
        let self = this;
        
    }
    render() {
        let _style ={
            padding:'0 24px 80px 24px'
        }
        return (
            <div style={_style}>
                <WebUploader 
                    btnId="picker1" 
                    title={'监护人身份证正面照'} 
                    uploaderConfig={{server: 'url', pick: '#pick', auto: true}} 
                    styleConfig={{width: '327px',height:'200px'}}  
                    belong="guardianIdFrontUrl"
                    showAction={this.showAction.bind(this)}
                    />
                <WebUploader 
                    btnId="picker2" 
                    title={'监护人身份证背面照'} 
                    uploaderConfig={{server: 'url', pick: '#pick', auto: true}} 
                    styleConfig={{width: '327px',height:'200px'}} 
                    belong="guardianIdBackUrl"
                    showAction={this.showAction.bind(this)}
                    />
                <Button  name="下一步" txt="1/3" callBack={this.action.bind(this)}/>
            </div>
            
        );
    }
}

export default Step1;