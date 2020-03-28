var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/sdn"; // 连接的url

MongoClient.connect(url, { useNewUrlParser: true }, (err, db) => { // 调用封装好的connect按照url建立和MongoDB之间的连接
    if (err) {
        throw err;
    }
    var dbo = db.db('sdn');
    for (var i = 0; i < 10; i++) {
        dbo.collection('site').aggregate([{ $sample: { size: 1 } }]).toArray((err, result) => {
            if (err) {
                throw err;
            }
            console.log(result); // 将回调的结果输出（由于结果是暂时保存在内存中的，确保有足够大的内存保存，或者使用流也可）
        });
    };
    db.close();
});;