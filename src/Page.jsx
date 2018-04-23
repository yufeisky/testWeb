import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';

import style from '@a/style/page';
import '@a/style/base.css';

import JZSQ from '@/page/jzsq';
import ZBZJ from '@/page/zbzj';
import ZBSQ from '@/page/zbsq';
import BQJZ from '@/page/bqjz';
import Schedule from '@cp/Schedule';
import Nav from '@cp/Nav';

import { getSearchParam } from '@a/js/utils.js';
import '@a/font/PangMenZhengDao/PangMenZhengDao.css';

const Page = (props) => {
    let match = props.match;
    const njId = getSearchParam('njId') || '';

    return (
        <div className="content-wrap">
            <div className="lz-banner">
                <div className="lz-nav">
                    <Nav param={props} />
                </div>
                <Link to="/jl"> {/* 奖励说明 */}
                    <div className="award-icon"></div>
                </Link>
                <div className="lizhi-icon"></div>
            </div>
            <div className="lz-container">
                <Route path={`${match.url}/jzsq`} component={JZSQ} /> {/* 家族赛区 */}
                <Route path={`${match.url}/zbzj`} render={() => {
                    if(njId.length < 1){
                        return <Redirect to="/page/zbsq" />; 
                    }else{
                        return <ZBZJ/>
                    }
                }} /> {/* 主播战绩 */}
                <Route path={`${match.url}/zbsq`} component={ZBSQ} /> {/* 主播赛区 */}
                <Route path={`${match.url}/bqjz`} component={BQJZ} /> {/* 百强家族 */}
            </div>
            <div className="lz-footer">
                <Schedule />
            </div>
        </div>
    );
};        

export default Page;