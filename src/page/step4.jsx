import React from 'react';
import store from '@/utils/store.js';
import px2rem from '@a/js/px2rem.js';
import successBtn from '@a/img/success_btn.png';
const Style={
    content:{
        textAlign:'center',
        position:'absolute',
        top:'50%',
        left:'24px',
        width:'328px',
        transform: 'translateY(-25%)',
        color:'rgba(0,0,0,0.5)',
        fontSize:'16px',
        lineHeight:'26px',
    },
    icon:{
        position:'relative',
        top:'60px',
        margin:'0 auto',
        width:'120px',
        height:'120px',
        background:`url('${successBtn}')`,
        backgroundSize:'cover'
    }
}

class Step4 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
        };

       
    }
    componentDidMount() {
    }
    handleRes(res) {
        alert(res)
        this.setState({
          // handle response
        })
    }
    action(a){
        
        //点击下一步 要先校验上传成功与否
        window.location='#/step1';
    }
    render() {
        let _style ={
            padding:'0 24px 80px 24px'
        }
        return (
            <div style={_style}>
                <div style={Style.icon}></div>
                <div style={Style.content}>
                    <div>您的认证申请信息已提交</div>
                    <div>审核通过将不再限制直播功能，审核结果将由荔枝妹以私信形式告知，请留意查看消息～</div>
                </div>
            </div>
            
        );
    }
}

export default Step4;