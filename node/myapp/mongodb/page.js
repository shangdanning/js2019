var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/sdn"; // 连接的url
//使用limit，分页和排序使用的统统是通道（一个来自linux的概念）
MongoClient.connect(url, {
    useNewUrlParser: true
}, (err, db) => { // 调用封装好的connect按照url建立和MongoDB之间的连接
    if (err) {
        throw err;
    }
    var dbo = db.db('sdn');
    dbo.collection('site').find().skip(1).limit(1).toArray((err, result) => { // 使用find()查询完成以后，使用toArray将查询到的数据完成回调
        if (err) {
            throw err;
        }
        console.log(result); // 将回调的结果输出（由于结果是暂时保存在内存中的，确保有足够大的内存保存，或者使用流也可）
        db.close();
    });
});;