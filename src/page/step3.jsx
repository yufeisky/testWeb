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
let next =false;

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
                showToast? Toast.info('请上传照片...',2):null;
                next=false;
                return;
            case 'loading':
            showToast?Toast.loading('请稍候，正在上传'):null;
                return;
            case 'end':
                if(next){
                    let info = store.state;
                    anchorVerify(info).then((res)=>{
                        if(res.code===0){
                            self.props.history.push('/step4')
                        }else{
                            next = false;
                            alert(res.msg)
                        }
                    })
                }
                return;
        }
    }
    next(){
        let self = this;
        next = true;
        self.action(true)

    }
    showAction(belong){
        let self = this;
        self.action(false);
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
                <Button name="提交审核" txt="3/3" callBack={this.next.bind(this)}/>
            </div>
            
        );
    }
}

export default Step3;