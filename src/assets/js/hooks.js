import req from 'request';

req.setHookFunction("anchorVerify", function(data) {
    return {
        code: 0, // 返回结果码
        msg: "提交成功", //返回接口结果信息
        data: {

        },
        time: '111' // 当前服务端时间戳
    }
})