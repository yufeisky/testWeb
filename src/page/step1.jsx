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
let next = false;
class Step1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            belongArr:['guardianIdFrontUrl','guardianIdBackUrl'],
        };

       
    }
    componentDidMount() {
        console.log('store',store)
        let self = this;
        // setInterval(function(){
        //     let state = self.checkIsReady();
        //     console.log('state',state);
        // },500)
    }
    checkIsReady(){
        let self = this;
        let { belongArr } = this.state;
        let state='end';
        let filesState = store.getState('filesState')||{};
        console.log('filesState',store.state.filesState)
        for(let i=0;i<belongArr.length;i++){
            if(!filesState[belongArr[i]]){
                state = 'noFile';
                return state;
            }else if(filesState[belongArr[i]]&&filesState[belongArr[i]]=='start'){
                state = 'loading';
            }
        }
        return state;
    }
    action(showToast){
        //点击下一步 要先校验上传成功与否
       
        let self = this;
        let state = this.checkIsReady();
        console.log('state',state);
        switch(state){
            case 'noFile':
                next=false;
                showToast? Toast.info('请上传照片...',2):null;
                return;
            case 'loading':
                showToast?Toast.loading('请稍候，正在上传'):null;
                return;
            case 'end':
                if(next){
                    next = false;
                    self.props.history.push('/step2')
                }
                return;
        }
    }
    showAction(belong){
        let self = this;
        self.action(false);
    }
    next(){
        let self = this;
        next=true;
        self.action(true)

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
                <Button  name="下一步" txt="1/3" callBack={this.next.bind(this)}/>
            </div>
            
        );
    }
}

export default Step1;