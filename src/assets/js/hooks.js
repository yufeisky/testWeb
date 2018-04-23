import req from 'request';

req.setHookFunction("getfansRankData", function(data) {
    return {
        "rCode": 0,
        "data": [{
                "radioId": "2579726592791319040",
                "userId": "2579726592682352600",
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "userName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 1
            },
            {
                "radioId": "17877674193531776",
                "userId": "4555228",
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/2/22/2586654267770661378.jpg",
                "userName": "悦咕咕✨九天星光💫",
                "count": 161072,
                "rank": 2
            }
        ],
        "msg": "x"
    }
})

req.setHookFunction("getYesterdayFamilyRank", function(data) {
    return {
        "rCode": 0,
        "data": [
            {
                "familyId": "2579726592791319040",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 1
            },
            {
                "familyId": "2579726592791319040",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 2
            },
            {
                "familyId": "2579726592791319040",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 3
            },
            {
                "familyId": "2579726592791319040",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 2
            },
            {
                "familyId": "2579726592791319040",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 3
            }
        ],
        "msg": "x"
    }
})

req.setHookFunction("getUserRank", function(data) {
    return {
        rCode : 0, // 结果返回码
        data: {        // 主播战绩   
            userName : "待着蝙蝠的女侠", // 主播昵称
            userPortrait : "x", //主播头像
            radioBand : "x",         //主播波段号
            recreation : 10,  //娱乐榜排名
            emotion : 140,  //情感榜排名
            talent : 0,  //才艺榜排名
            endTimestamp : "108193351" // 活动结束时间
        }, 
        msg : "x" //返回接口结果信息
    }
});
req.setHookFunction("getUserRankAndPoint", function(data) {
    return {
        rCode : 0, // 结果返回码
        data: {        // 主播战绩   
            userName : 'Milford Bednar', // 主播昵称
            userPortrait : 'x', //主播头像
            radioBand : 'FM9u93349',         //主播波段号
            recreation : 5,  //娱乐榜排名
            emotion : 0,  //情感榜排名
            talent : 0,  //才艺榜排名
            endTimestamp : '0', // 活动结束时间
            beyond: 128, // 与上一名相差多少分贝值
            todayDecibels: {
                decibels: 1500, // 分贝值
                checkpoint: 1, // 关卡 1，2，3关
                checkpointDecibels: 30000, // 关卡最多分贝值
            }
        }, 
        msg : "x" //返回接口结果信息
    }
});
req.setHookFunction("getListData", function(data) {
    console.log("getListData fake request");
    return {
        "rCode": 0,
        "data": [{
                "radioId": "2579726592791319040",
                "userId": 2579726592682352600,
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "userName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 1,
                "currentStage": 10,
                "starCount": 300,
            },
            {
                "radioId": "2579726592791319040",
                "userId": 2579726592682352600,
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "userName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 2,
                "currentStage": 9,
                "starCount": 113,
            },
            {
                "radioId": "2579726592791319040",
                "userId": 2579726592682352600,
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "userName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 3,
                "currentStage": 8,
                "starCount": 3,
            },
            {
                "radioId": "2579726592791319040",
                "userId": 2579726592682352600,
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "userName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 4,
                "currentStage": 7,
                "starCount": 6,
            },
            {
                "radioId": "2579726592791319040",
                "userId": 2579726592682352600,
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "userName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 5,
                "currentStage": 6,
                "starCount": 3,
            }, {
                "radioId": "2579726592791319040",
                "userId": 2579726592682352600,
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "userName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 6,
                "currentStage": 5,
                "starCount": 2,
            }, {
                "radioId": "2579726592791319040",
                "userId": 2579726592682352600,
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "userName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 7,
                "currentStage": 4,
                "starCount": 3,
            },
            {
                "radioId": "2579726592791319040",
                "userId": 2579726592682352600,
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "userName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 8,
                "currentStage": 3,
                "starCount": 3,
            },
            {
                "radioId": "2579726592791319040",
                "userId": 2579726592682352600,
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "userName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 9,
                "currentStage": 2,
                "starCount": 3,
            },
            {
                "radioId": "2579726592791319040",
                "userId": 2579726592682352600,
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "userName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 9,
                "currentStage": 1,
                "starCount": 3,
            }
        ],
        "msg": "成功"
    }
})

req.setHookFunction("getProgressData", function(data) {
    console.log("getProgressData fake request");
    return {
        "rCode": 0,
        "data": {
            "progress": {
                "njUid": "211111",
                "userName": "Audreywytsinner阿涼🤖",
                "userPortrait": "https://cdnimg103.lizhi.fm/user/2017/2/1/2582830065397072898.jpg",
                "currentStage": 7,
                "starCount": 3
            },
            "range": 20,
            "bestLevel": 6,
            "bestLevelStar": 4,
            "winCount": 4,
            "winSteak": 3,
            "winRate": "70%",
            "totalNum": 1,
            "endTimestamp": "1532418595000",
            "achivementLocal": { // 成就
                first: 60, // 偷塔狂魔
                second: 60, // 常胜将军
                third: 60, // 绝地反杀
                fourth: 7, // 排位超神
                fifth: 3 // 排位MVP
            }
        },
        "msg": "成功"
    }
})



req.setHookFunction("getFamilyRankData", function(data) {
    console.log("getFamilyRankData fake request");
    return {
        "rCode": 0,
        "data": [{
                "familyId": "2579726592682352600",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 161072,
                "rank": 1
            },
            {
                "familyId": "2579726592682352600",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 161071,
                "rank": 2
            },
            {
                "familyId": "2579726592682352600",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 16907,
                "rank": 3
            },
            {
                "familyId": "2579726592682352600",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 16102,
                "rank": 4
            },
            {
                "familyId": "2579726592682352600",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 161071,
                "rank": 2
            },
            {
                "familyId": "2579726592682352600",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 16907,
                "rank": 3
            },
            {
                "familyId": "2579726592682352600",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 16102,
                "rank": 4
            },
            {
                "familyId": "2579726592682352600",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 161071,
                "rank": 2
            },
            {
                "familyId": "2579726592682352600",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 16907,
                "rank": 3
            },
            {
                "familyId": "2579726592682352600",
                "familyPortrait": "https://cdnimg103.lizhi.fm/user/2017/3/1/2587999608294395906.jpg",
                "familyName": "莫忘羽【留白FM】",
                "count": 16102,
                "rank": 4
            }
        ],
        "msg": "x"
    }
})

// 家族榜单，每日战况
req.setHookFunction("getDailyFamilyRank", function(data) {
    return {
        rCode : 0, // 结果返回码
        data:      // 活动榜单
         [
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 0, // 距离上一名还差分数
                rank : 1 // 排名
            },
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 20, // 距离上一名还差分数
                rank : 2 // 排名
            },
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 65, // 距离上一名还差分数
                rank : 3 // 排名
            },
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 10, // 距离上一名还差分数
                rank : 4 // 排名
            },
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 20, // 距离上一名还差分数
                rank : 5 // 排名
            },
        ]
       };
})
// 家族榜单，每日战况
req.setHookFunction("getMoreDailyFamilyRank", function(data) {
    return {
        rCode : 0, // 结果返回码
        data:      // 活动榜单
         [
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 0, // 距离上一名还差分数
                rank : 1 // 排名
            },
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 20, // 距离上一名还差分数
                rank : 2 // 排名
            },
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 65, // 距离上一名还差分数
                rank : 3 // 排名
            },
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 10, // 距离上一名还差分数
                rank : 4 // 排名
            },
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 20, // 距离上一名还差分数
                rank : 5 // 排名
            },
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 20, // 距离上一名还差分数
                rank : 6 // 排名
            },
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 20, // 距离上一名还差分数
                rank : 7 // 排名
            },
            { 
                familyId : "x", // 家族id
                familyName : "xReyes Kling", // 家族名称
                familyPortrait : "x", //家族头像
                count : 20, // 距离上一名还差分数
                rank : 8 // 排名
            },
         ],
        msg : "x" //返回接口结果信息
       };
})

// 家族榜单，声势排行
req.setHookFunction("getSoundFamilyRank", function(data) {
    return {
        rCode : 0, // 结果返回码
        data:      // 活动榜单
         [{ 
		    familyId : "x", // 家族id
		    familyName : "Garret Metz", // 家族名称
		    familyPortrait : "x", //家族头像
		    count : 23, // 分数
		    rank : 1, // 排名
        },
        { 
		    familyId : "x", // 家族id
		    familyName : "Garret Metz", // 家族名称
		    familyPortrait : "x", //家族头像
		    count : 23, // 分数
		    rank : 2, // 排名
        },
        { 
		    familyId : "x", // 家族id
		    familyName : "Garret Metz", // 家族名称
		    familyPortrait : "x", //家族头像
		    count : 23, // 分数
		    rank : 3, // 排名
        },
        { 
		    familyId : "x", // 家族id
		    familyName : "Garret Metz", // 家族名称
		    familyPortrait : "x", //家族头像
		    count : 23, // 分数
		    rank : 4, // 排名
		}],
        msg : "x" //返回接口结果信息
       };
})

// 娱乐榜-男声数据
req.setHookFunction("getYLBoyRank", function(data) {
    return (Math.random() * 10) < 5 ? {
        rCode : 0, // 结果返回码
        data:      // 活动榜单
         [{ 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "Patrick Taylor 999", // 主播昵称
             count : 30, // 数量
             rank : 1 // 排名     
         },
         { 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "Patrick Taylor", // 主播昵称
             count : 12, // 数量
             rank : 2 // 排名      
         },
         { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 3, // 排名   
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 4, // 排名    
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 5 // 排名  
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 6 // 排名      
        },
        { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 7 // 排名   
       },
       { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 8 // 排名       
       }],
        msg : "x" //返回接口结果信息
       } : {
        rCode : 0, // 结果返回码
        data:      // 活动榜单
         [{ 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "Patrick Taylor 888", // 主播昵称
             count : 60, // 数量
             rank : 1 // 排名     
         },
         { 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "Patrick Taylor", // 主播昵称
             count : 12, // 数量
             rank : 2 // 排名      
         },
         { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 3, // 排名   
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 4, // 排名    
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 5 // 排名  
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 6 // 排名      
        },
        { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 7 // 排名   
       },
       { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 8 // 排名       
       }],
        msg : "x" //返回接口结果信息
       };
})
// 娱乐榜-女声数据
req.setHookFunction("getYLGirlRank", function(data) {
    return {
        rCode : 0, // 结果返回码
        data:      // 活动榜单
         [{ 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "PatrickEli TaylorWalsh", // 主播昵称
             count : 12, // 数量
             rank : 1 // 排名     
         },
         { 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "PatrickJanet Robel Taylor", // 主播昵称
             count : 12, // 数量
             rank : 2 // 排名      
         },
         { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "PatrickEmil Parker Taylor", // 主播昵称
            count : 12, // 数量
            rank : 3, // 排名   
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 4, // 排名    
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 5 // 排名  
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 6 // 排名      
        },
        { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 7 // 排名   
       },
       { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 8 // 排名       
       }],
        msg : "x" //返回接口结果信息
       };
})

// 情感榜-男声数据
req.setHookFunction("getQGBoyRank", function(data) {
    return {
        rCode : 0, // 结果返回码
        data:      // 活动榜单
         [{ 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "PatrickQG Taylor", // 主播昵称
             count : 12, // 数量
             rank : 1 // 排名     
         },
         { 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "Patrick  QG Taylor", // 主播昵称
             count : 12, // 数量
             rank : 2 // 排名      
         },
         { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 3, // 排名   
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 4, // 排名    
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 5 // 排名  
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 6 // 排名      
        },
        { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 7 // 排名   
       },
       { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 8 // 排名       
       }],
        msg : "x" //返回接口结果信息
       };
})
// 情感榜-女声数据
req.setHookFunction("getQGGirlRank", function(data) {
    return {
        rCode : 0, // 结果返回码
        data:      // 活动榜单
         [{ 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "PatrickEliQG TaylorWalsh", // 主播昵称
             count : 12, // 数量
             rank : 1 // 排名     
         },
         { 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "PatrickJanet FQG Robel Taylor", // 主播昵称
             count : 12, // 数量
             rank : 2 // 排名      
         },
         { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "PatrickEmil Parker Taylor", // 主播昵称
            count : 12, // 数量
            rank : 3, // 排名   
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 4, // 排名    
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 5 // 排名  
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 6 // 排名      
        },
        { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 7 // 排名   
       },
       { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 8 // 排名       
       }],
        msg : "x" //返回接口结果信息
       };
})
// 才艺榜-男声数据
req.setHookFunction("getCYBoyRank", function(data) {
    return {
        rCode : 0, // 结果返回码
        data:      // 活动榜单
         [{ 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "Patrick CY Taylor", // 主播昵称
             count : 12, // 数量
             rank : 1 // 排名     
         },
         { 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "Patrick Taylor", // 主播昵称
             count : 12, // 数量
             rank : 2 // 排名      
         },
         { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 3, // 排名   
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 4, // 排名    
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 5 // 排名  
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 6 // 排名      
        },
        { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 7 // 排名   
       },
       { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 8 // 排名       
       }],
        msg : "x" //返回接口结果信息
       };
})
// 才艺榜-女声数据
req.setHookFunction("getCYGirlRank", function(data) {
    return {
        rCode : 0, // 结果返回码
        data:      // 活动榜单
         [{ 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "PatrickEli CYS TaylorWalsh", // 主播昵称
             count : 12, // 数量
             rank : 1 // 排名     
         },
         { 
             radioId : "1234", // 主播播客ID
             userId : "890099", // 主播ID
             userPortrait : "x", //主播头像
             userName : "PatrickJanet Robel Taylor", // 主播昵称
             count : 12, // 数量
             rank : 2 // 排名      
         },
         { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "PatrickEmil Parker Taylor", // 主播昵称
            count : 12, // 数量
            rank : 3, // 排名   
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 4, // 排名    
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 5 // 排名  
        },
        { 
            radioId : "1234", // 主播播客ID
            userId : "890099", // 主播ID
            userPortrait : "x", //主播头像
            userName : "Patrick Taylor", // 主播昵称
            count : 12, // 数量
            rank : 6 // 排名      
        },
        { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 7 // 排名   
       },
       { 
           radioId : "1234", // 主播播客ID
           userId : "890099", // 主播ID
           userPortrait : "x", //主播头像
           userName : "Patrick Taylor", // 主播昵称
           count : 12, // 数量
           rank : 8 // 排名       
       }],
        msg : "x" //返回接口结果信息
       };
})

req.setHookFunction("getTodayEndTime", function(data) {
    return {
        rCode : 0, // 结果返回码
        data: 108193351, 
        msg : "x" //返回接口结果信息
    }
});

req.setHookFunction("getTop100Family", function(data) {
    return {
        rCode : 0, // 结果返回码
        data: {
            finalists: [{ //入围榜
                familyName : "Regional Paradigm Director", // 家族名称
                familyPortrait : "", //家族头像
            },{
                familyName : "Regional Paradigm Director", // 家族名称
                familyPortrait : "", //家族头像
            },{
                familyName : "Regional Paradigm Director", // 家族名称
                familyPortrait : "", //家族头像
            },{
                familyName : "Regional Paradigm Director", // 家族名称
                familyPortrait : "", //家族头像
            }],
            potentials: [{ //潜力榜
                familyName : "Jakayla Pacocha", // 家族名称
                familyPortrait : "", //家族头像
            },{
                familyName : "Jakayla Pacocha", // 家族名称
                familyPortrait : "", //家族头像
            },{
                familyName : "Jakayla Pacocha", // 家族名称
                familyPortrait : "", //家族头像
            },{
                familyName : "Jakayla Pacocha", // 家族名称
                familyPortrait : "", //家族头像
            },{
                familyName : "Jakayla Pacocha", // 家族名称
                familyPortrait : "", //家族头像
            }]
        }, 
        msg : "x" //返回接口结果信息
    }
});

// 获取活动结束时间
req.setHookFunction("getEndTime", function(data) {
    return {
        rCode : 0, // 结果返回码
        data: 569100, 
        msg : "x" //返回接口结果信息
    }
});