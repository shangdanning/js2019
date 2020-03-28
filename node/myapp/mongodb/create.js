var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/sdn"; // 连接的url

MongoClient.connect(url, {
    useNewUrlParser: true
}, (err, db) => { // 调用封装好的connect按照url建立和MongoDB之间的连接
    if (err) {
        throw err;
    }
    console.log("数据库连接建立");
    var dbase = db.db('sdn'); // 选择数据库为sdn
    dbase.createCollection('site', (err, res) => { // 创建数据库为sdn下的site集合
        if (err) {
            throw err;
        }
        console.log('创建集合！');
        db.close();
    });
})