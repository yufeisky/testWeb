import React from 'react';
import Proptypes from 'prop-types';
import Style from './index.scss';

class Button extends React.Component{
    constructor(props){
        super(props);
    }
    actionNext(params){
       let {callBack} = this.props;
       callBack(params) 
    }
    render(){
        let {name,txt ,callBack} = this.props;
        return(
            <div className={Style.wrap}>
                <div className={Style.button} onClick={this.actionNext.bind(this)}>
                    <span className={Style.txt}>{name}</span>
                    <div className={Style.step} >{txt}</div>
                </div>
            </div>
        )
    }
}

export default Button;