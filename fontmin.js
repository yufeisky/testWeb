var Fontmin = require('fontmin');
var srcPath = 'src/assets/font/PangMenZhengDao.ttf'; // 字体源文件
var destPath = 'src/assets/font/PangMenZhengDao'; // 输出路径
var text = `娱乐情感榜才艺男声女声榜家族赛区主播战绩规则海选冲刺总决
家族排名：主播年度盛典排名娱乐情感榜才艺男声女声发起距离上一名还差分贝
0123456789
abcdefghijklmnopqrstuvwsyz
ABCDEFGHIJKLMNOPQRSTUVWSYZ
今日榜单结束倒计时12小时35分钟23秒每日战况声势排行榜
全民海选晋级争霸巅峰之战。.
查看更多
距离本轮比拼结束还有天小时分钟秒
注：一个主播只能入选一个赛区，如分贝值相同，则取排名靠前的赛区作为晋级成绩。
虚位以待
今日榜单结束倒计时
荔枝FM2017年度盛典百强家族评选
荔枝FM2017年度盛典百强家族评选
荔枝FM将于2018年1月1日-31日期间，评选出综合实力最强的100个家族，作为”荔枝2017年度百强家族“。百强家族将成为荔枝FM2018年重点合作家族。
作为荔枝2017年度百强家族。年度百强家族福利：
①尊贵蓝V认证：家族长账号机构认证“2017年度百强家族”
②年度百强家族名单将于2018年2月荔枝APP首页展示3天
③2018年荔枝FM音频直播重点合作家族
评选细则，请家族长联系对接小编咨询。
当前第每日任务关
收集
距离上一名还差分贝值
未上榜
`;
// 初始化
var fontmin = new Fontmin()
    .src(srcPath)
    .use(Fontmin.glyph({
        text: text
    }))
    .use(Fontmin.ttf2eot())
    .use(Fontmin.ttf2woff())
    .use(Fontmin.ttf2svg())
    .use(Fontmin.css())
    .dest(destPath);
// 执行
fontmin.run(function(err, files, stream) {
    if (err) {
        console.error(err);
    }
    console.log('done');
});