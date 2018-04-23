var client = require('scp2');
var serverConfig = {
    port: 12330,
    host: '210.14.152.123',
    username: 'dc',
    privateKey: require("fs").readFileSync('./build/id_rsa'),
    passphrase: '123456',
    path: '/data/tmp/ftp/sfestival/static/gala/'
}
client.scp('./dist/', serverConfig, (err) => {
    if (!err) {
        console.log('发布到预发环境成功');
    }
})