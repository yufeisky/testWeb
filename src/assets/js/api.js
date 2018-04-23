import req from 'request';
import { resolve } from 'url';

// 获取头号粉丝
export function getFansList(njUid) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/common/fanRank`,
            method: "GET",
            crossOrigin: true,
            data:{
                activityName:'CAMPAIGN_AUDITION',
                njUid:njUid
            }
        }, {
            hook: "getfansRankData"
        }).then(function(res) {
            resolve(res)
        });
    })
}
// 获取昨日闪耀家族
export function getYesterdayFamilyRank(offset, count) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/annualCampaign/yesterdayFamilyRanks`,
            method: "GET",
            crossOrigin: true,
            data:{
                activityName:'CAMPAIGN_AUDITION',
                offset:offset,
                count: count
            }
        }, {
            hook: "getYesterdayFamilyRank"
        }).then(function(res) {
            resolve(res)
        });
    })
}
// 获取主播个人信息
export function getUserRank(njUid) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/annualCampaignAudition/userRank/${njUid}`,
            method: "GET",
            crossOrigin: true,
        }, {
            hook: "getUserRank"
        }).then(function(res) {
            resolve(res)
        });
    })
}
// 获取主播个人信息和对战信息
export function getUserRankAndPoint(njUid) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/annualCampaignAudition/userRank/${njUid}`,
            method: "GET",
            crossOrigin: true,
        }, {
            hook: "getUserRankAndPoint"
        }).then(function(res) {
            resolve(res)
        });
    })
}
// 家族榜单，每日战况
export function getDailyFamilyRank(offset, count) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/annualCampaign/todayFamilyRanks`,
            method: "GET",
            crossOrigin: true,
            data:{
                activityName : 'CAMPAIGN_AUDITION',
                offset : offset,
                count : count
            }
        }, {
            hook: "getDailyFamilyRank"
        }).then(function(res) {
            resolve(res)
        });
    })
}

// 家族榜单，声势排行
export function getSoundFamilyRank(offset, count) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/annualCampaign/topFamilyRanks`,
            method: "GET",
            crossOrigin: true,
            data:{
                activityName:'CAMPAIGN_AUDITION',
                rankName:'FAMILY',
                offset: offset,
                count: count
            }
        }, {
            hook: "getSoundFamilyRank"
        }).then(function(res) {
            resolve(res)
        });
    })
}

// 家族榜单，每日战况-150条
export function getMoreDailyFamilyRank(offset, count) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/annualCampaign/todayFamilyRanks`,
            method: "GET",
            crossOrigin: true,
            data:{
                activityName : 'CAMPAIGN_AUDITION',
                offset : offset,
                count : count
            }
        }, {
            hook: "getMoreDailyFamilyRank"
        }).then(function(res) {
            resolve(res)
        });
    })
}
// 娱乐榜-男声数据
export function getYLBoyRank(offset, count) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/common/njRank`,
            method: "GET",
            crossOrigin: true,
            data: {
                activityName: 'CAMPAIGN_AUDITION',
                rankName:'RECREATION_BOY',
                offset: offset,
                count: count
            }
        }, {
            hook: "getYLBoyRank"
        }).then(function(res) {
            resolve(res)
        });
    })
}
// 娱乐榜-女声数据
export function getYLGirlRank(offset, count) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/common/njRank`,
            method: "GET",
            crossOrigin: true,
            data: {
                activityName: 'CAMPAIGN_AUDITION',
                rankName:'RECREATION_GIRL',
                offset: offset,
                count: count
            }
        }, {
            hook: "getYLGirlRank"
        }).then(function(res) {
            resolve(res)
        });
    })
}
// 情感榜-男声数据
export function getQGBoyRank(offset, count) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/common/njRank`,
            method: "GET",
            crossOrigin: true,
            data: {
                activityName: 'CAMPAIGN_AUDITION',
                rankName:'EMOTION_BOY',
                offset: offset,
                count: count
            }
        }, {
            hook: "getQGBoyRank"
        }).then(function(res) {
            resolve(res)
        });
    })
}
// 情感榜-女声数据
export function getQGGirlRank(offset, count) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/common/njRank`,
            method: "GET",
            crossOrigin: true,
            data: {
                activityName: 'CAMPAIGN_AUDITION',
                rankName:'EMOTION_GIRL',
                offset: offset,
                count: count
            }
        }, {
            hook: "getQGGirlRank"
        }).then(function(res) {
            resolve(res)
        });
    })
}
// 才艺榜-男声数据
export function getCYBoyRank(offset, count) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/common/njRank`,
            method: "GET",
            crossOrigin: true,
            data: {
                activityName: 'CAMPAIGN_AUDITION',
                rankName:'TALENT_BOY',
                offset: offset,
                count: count
            }
        }, {
            hook: "getCYBoyRank"
        }).then(function(res) {
            resolve(res)
        });
    })
}
// 才艺榜-女声数据
export function getCYGirlRank(offset, count) {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/common/njRank`,
            method: "GET",
            crossOrigin: true,
            data: {
                activityName: 'CAMPAIGN_AUDITION',
                rankName:'TALENT_GIRL',
                offset: offset,
                count: count
            }
        }, {
            hook: "getCYGirlRank"
        }).then(function(res) {
            resolve(res)
        });
    })
}
// 今日榜单结束倒计时
export function getTodayEndTime() {
    return new Promise(function(resolve, reject) {
        req({
            url: `/activity/annualCampaign/todayFamilyRanksEndTime`,
            method: "GET",
            crossOrigin: true,
            data: {
                activityName: 'CAMPAIGN_AUDITION'
            }
        }, {
            hook: "getTodayEndTime"
        }).then(function(res) {
            resolve(res)
        });
    })
}

// 获取百强家族
export function getTop100Family() {
    return new Promise(function(resolve, reject){
        req({
            url: '/activity/top100Family/ranks',
            method: 'GET',
            crossOrigin: true
        }, {
            hook: 'getTop100Family'
        }).then(function(res){
            resolve(res);
        });
    });
};
// 获取活动结束时间
export function getEndTime() {
    return new Promise(function(resolve, reject){
        req({
            url: '/activity/common/getEndTime',
            method: 'GET',
            crossOrigin: true,
            data: {
                activityName: 'CAMPAIGN_AUDITION'
            }
        }, {
            hook: 'getEndTime'
        }).then(function(res){
            resolve(res);
        });
    });
};