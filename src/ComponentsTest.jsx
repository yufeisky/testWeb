import React from 'react';
import Block from '@cp/Block';
import ImageBox from '@cp/ImageBox';
import TabsControl from '@cp/TabsControl';
import TopThree from '@cp/TopThree';
import Schedule from '@cp/Schedule';


import {getFansList} from '@a/js/api.js';

import px2rem from '@a/js/px2rem.js';

import {Toast, Tabs} from 'antd-mobile';
import '@a/style/antd.scss';
import '@a/font/PangMenZhengDao/PangMenZhengDao.css';
const avt = require('@a/img/avatar.jpg');
const tabs = [
    {
        title: <div className="tabName">男声榜</div>
    }, {
        title: <div className="tabName">女声榜</div>
    }
];
const tabUnderLine = require('@a/img/tabUnderLine.png');

class ComponentsTest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: 'Jack',
            avt,
            fansList:[],
        };
    }

    showToast() {
        Toast.info('hello', 10);
    }
    refreshFn() {
        Toast.info('刷新成功', 1);
    }
    componentDidMount() {
        this.getFansList();
        
    }
    getFansList(){
        let self = this;
        getFansList('123').then((res)=>{
            if(res.rCode===0){
                self.setState({
                    fansList:res.data
                })
            }
        })
    }
    render() {
        let tabBarUnderlineStyle={
            height: px2rem(7),
            backgroundImage: `url('${tabUnderLine}')`,
            backgroundSize:'100% 100%'
        };

        return (
            <div
                className="g-index"
                style={{
                background: '#30116f'
            }}>
                <Block
                    isRefresh={true}
                    refresh={this
                    .refreshFn
                    .bind(this)}>
                    test22333
                </Block>

                <div style={{
                    padding: `${px2rem(12)}`
                }}>
                    <Block isRefresh ={false}>
                        <div
                            style={{
                            padding: `${px2rem(20)} 0 ${px2rem(12)} 0`,
                            overflow: 'hidden'
                        }}>
                            <ImageBox
                                boxWidth={`${px2rem(140)}`}
                                hasNum={false}
                                index="1"
                                style={{
                                float: 'left'
                            }}
                                avt_name="家族名字家族名字">
                                <img src={avt} alt=""/>
                            </ImageBox>
                            <ImageBox
                                boxWidth={`${px2rem(60)}`}
                                hasNum={true}
                                index="2"
                                style={{
                                float: 'left'
                            }}
                                avt_name="家族名字家族名字">
                                <img src={avt} alt=""/>
                            </ImageBox>
                            <ImageBox
                                boxWidth={`${px2rem(60)}`}
                                hasNum={true}
                                index="3"
                                style={{
                                float: 'left'
                            }}
                                avt_name="家族名字家族名字">
                                <img src={avt} alt=""/>
                            </ImageBox>
                            <ImageBox
                                boxWidth={`${px2rem(60)}`}
                                hasNum={true}
                                index="4"
                                style={{
                                float: 'left'
                            }}
                                avt_name="家族名字家族名字">
                                <img src={avt} alt=""/>
                            </ImageBox>
                            <ImageBox
                                boxWidth={`${px2rem(60)}`}
                                hasNum={true}
                                index="5"
                                style={{
                                float: 'left'
                            }}
                                avt_name="家族名字家族名字">
                                <img src={avt} alt=""/>
                            </ImageBox>
                        </div>
                    </Block>
                </div>

                <TabsControl tabIndex={1}>
                    <div className="tab" name="娱乐榜">
                        <div className="item-box">
                            <div
                                style={{
                                padding: `0 ${px2rem(12)} 0 ${px2rem(12)}`
                            }}>
                                <Block
                                    isRefresh={true}
                                    refresh={this
                                    .refreshFn
                                    .bind(this)}>

                                    <Tabs
                                        tabs={tabs}
                                        initialPage={1}
                                        tabBarBackgroundColor={{
                                        background: 'none'
                                    }}
                                        tabBarUnderlineStyle={tabBarUnderlineStyle}
                                        onChange={(tab, index) => {
                                        console.log('onChange', index, tab);
                                    }}
                                        onTabClick={(tab, index) => {
                                        console.log('onTabClick', index, tab);
                                    }}>
                                        <div
                                            style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minHeight: '200px'
                                        }}>
                                            Content of first tab
                                        </div>
                                        <div
                                            style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minHeight: '200px'
                                        }}>
                                            Content of second tab
                                        </div>

                                    </Tabs>

                                </Block>

                            </div>
                        </div>
                    </div>
                    <div className="tab" name="情感榜">
                        <div className="item-box">
                            <div
                                style={{
                                padding: `0 ${px2rem(12)} 0 ${px2rem(12)}`
                            }}>
                                <Block
                                    isRefresh
                                    ={true}
                                    refresh={this
                                    .refreshFn
                                    .bind(this)}>
                                    <Tabs
                                        tabs={tabs}
                                        initialPage={1}
                                        tabBarBackgroundColor={{
                                        background: 'none'
                                    }}
                                        tabBarUnderlineStyle={tabBarUnderlineStyle}
                                        onChange={(tab, index) => {
                                        console.log('onChange', index, tab);
                                    }}
                                        onTabClick={(tab, index) => {
                                        console.log('onTabClick', index, tab);
                                    }}>
                                        <div
                                            style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minHeight: '200px'
                                        }}>
                                            Content of first tab
                                        </div>
                                        <div
                                            style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minHeight: '200px'
                                        }}>
                                            Content of second tab
                                        </div>

                                    </Tabs>
                                </Block>
                            </div>
                        </div>
                    </div>
                    <div className="tab" name="才艺榜">
                        <div className="item-box">
                            <div
                                style={{
                                padding: `0 ${px2rem(12)} 0 ${px2rem(12)}`
                            }}>
                                <Block
                                    isRefresh
                                    ={true}
                                    refresh={this
                                    .refreshFn
                                    .bind(this)}>
                                    <Tabs
                                        tabs={tabs}
                                        initialPage={1}
                                        tabBarBackgroundColor={{
                                        background: 'none'
                                    }}
                                        tabBarUnderlineStyle={tabBarUnderlineStyle}
                                        onChange={(tab, index) => {
                                        console.log('onChange', index, tab);
                                    }}
                                        onTabClick={(tab, index) => {
                                        console.log('onTabClick', index, tab);
                                    }}>
                                        <div
                                            style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minHeight: '200px'
                                        }}>
                                            Content of first tab
                                        </div>
                                        <div
                                            style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            minHeight: '200px'
                                        }}>
                                            Content of second tab
                                        </div>
                                    </Tabs>
                                </Block>
                            </div>
                        </div>
                    </div>
                </TabsControl>
              <div style={{
                padding: `${px2rem(12)}`
              }}>
                    <TopThree fansList = {this.state.fansList} />
              </div>
              <Schedule />
            </div>
        );
    }
}

export default ComponentsTest;
