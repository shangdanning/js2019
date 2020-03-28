var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/sdn";
MongoClient.connect(url, {
    useNewUrlParser: true
}, (err, db) => {
    if (err) {
        throw err;
    }
    var dbo = db.db('sdn');
    dbo.collection('site').find({}).toArray((err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        db.close();
    })
})