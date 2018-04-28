import React from 'react';


import {Toast} from 'antd-mobile';
import store from '@/utils/store.js';
import px2rem from '@a/js/px2rem.js';
import WebUploader from '@cp/WebUploader/index.jsx';
import {getSearchParam} from '@a/js/utils.js';
import client from '@lizhife/client';
import Button from '@cp/Button/index.jsx';
const njId = getSearchParam('njId') || ''; // 主播id
var isLizhi = client.isLizhiFM();


class Step2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            belongArr:['guardianAuthorizeUrl']
        };

       
    }
    componentDidMount() {
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
                return;
            case 'loading':
            showToast?Toast.loading('请稍候，正在上传'):null;
                return;
            case 'end':
                self.props.history.push('/step3');
                return;
        }
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
                    title={'手持身份证&监护人手写同意说明书'} 
                    uploaderConfig={{server: 'url', pick: '#pick', auto: true}} 
                    styleConfig={{width: '327px',height:'200px'}}
                    belong="guardianAuthorizeUrl"
                    showAction={this.showAction.bind(this)}
                    />
                <div style={{textAlign:'center',lineHeight:'24px',fontSize:'13px',color:'rgba(0,0,0,0.5)',marginTop:'40px'}}>监护人手写同意说明书需涵盖以下内容<br/>
“本人同意未成年人子女在荔枝平台进行网络直播行为，确保其行为处于本人监督之下，并愿意承担未成年人子女使用本账号所产生的一切法律后果”。同意说明书右下方签名及注明日期（日期需为提交认证当日）</div>
                <Button  name="下一步" txt="2/3" callBack={this.action.bind(this,true)}/>
            </div>
            
        );
    }
}

export default Step2;