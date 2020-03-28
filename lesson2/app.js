//引入依赖
var express = require('express');
var utility = require('utility');
//建立express实例
var app = express();

app.get('/', function(req, res) {
    var q = req.query.q; //当我们不传值时，为undefined
    console.log(q);
    var md5Value = utility.md5(q);
    res.send(md5Value);
});
app.listen(3000, function(req, res) {
    console.log(req); //undefined
    console.log('app is running at port 3000')
})