var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/sdn"; // 连接的url


//==================================插入一条数据===========================================

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => { // 调用封装好的connect按照url建立和MongoDB之间的连接
    if (err) {
        throw err;
    }
    var dbo = db.db('sdn');
    var myobj = { name: "sdn", url: "www.baidu.info" };
    dbo.collection('site').insertOne(myobj, (err, res) => { // mongodb语法 sdn.site.insert(myObj);
        if (err) {
            throw err;
        }
        console.log("文档插入成功！");
        db.close();
    });
});