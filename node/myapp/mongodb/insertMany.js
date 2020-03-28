var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/sdn"; // 连接的url

//================================插入多条数据=============================================

MongoClient.connect(url, {
    useNewUrlParser: true
}, (err, db) => {
    if (err) {
        throw err;
    }
    var dbo = db.db('sdn');
    var myobj = [{
        name: "sdn",
        url: "baidu.com",
        type: "un"
    }, {
        name: "google",
        url: "google.com.hk",
        type: "un"
    }, {
        name: "twitter",
        url: "twitter.com",
        type: "un"
    }];
    dbo.collection('site').insertMany(myobj, (err, res) => {
        if (err) {
            throw err;
        }
        console.log("文档插入成功！")
        db.close();
    });
})