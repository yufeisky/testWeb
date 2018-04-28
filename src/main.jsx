import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App';
import FastClick from 'fastclick';
// import lz from '@lizhife/lz-jssdk';
import {getSearchParam} from '@a/js/utils.js';
import store from '@/utils/store.js';
// window.lz = lz;
const njId = getSearchParam('id') || ''; // 主播id
store.setState('userId',njId);
// lz.config({
//     debug: false,
//     url: document.location.protocol == 'https:' ? 'https://h5security.lizhi.fm/jsBridgeConfig/get' : '',
//     apiList: [
//         'getSessionUser',
//         'toAction',
//         'configShareUrl',
//         'isSupportFunc',
//         'scanUser',
//         'scanRadio'
//     ],
//     eventList: ['user:login', 'LizhiJSBridgeReady'],
//     onSign(r1, r2, r3, r4) {}
// });

// lz.ready(()=>{
  
// });

const $root = document.getElementById('root');

if ('addEventListener' in document) {
  window
      .addEventListener('DOMContentLoaded', function () {
          FastClick.attach(document.body);
      }, false);
}

const render = () => {
  ReactDOM.render(<App />, $root);
};

render();

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('@/App', () => {
      render();
    });
  }
}
