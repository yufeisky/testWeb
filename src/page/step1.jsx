import React from 'react';



// import '@a/style/antd.scss';

import px2rem from '@a/js/px2rem.js';
// import WebUploader from '@cp/WebUploader/index.jsx';
import ReactCoreImageUpload  from 'react-core-image-upload';
import {getSearchParam} from '@a/js/utils.js';
import client from '@lizhife/client';

const njId = getSearchParam('njId') || ''; // 主播id
var isLizhi = client.isLizhiFM();


class Step1 extends React.Component{
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
    render() {
        return (
            <div>
                <div>手持身份证&监护人手写同意说明书</div>
                {/*<WebUploader uploaderConfig={{server: 'url', pick: '#pick', auto: true}} styleConfig={{width: 200}}/>*/}
                <ReactCoreImageUpload
                    text="Upload Your Image"
                    className='pure-button'
                    inputOfFile="files"
                    url="http://api.upalapp.com/util/uploadFile"
                    imageUploaded={this.handleRes}>
                </ReactCoreImageUpload>
            </div>
            
        );
    }
}

export default Step1;