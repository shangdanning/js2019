var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var cnodeUrl = 'https://cnodejs.org';

var app = express();
app.get('/', function(req, res, next) {
    // 用 superagent 去抓取 https://cnodejs.org/ 的内容
    superagent.get('https://cnodejs.org/').end(function(err, sres) {
        if (err) {
            return next(err);
        }
        var topicUrls = [];
        var $ = cheerio.load(sres.text);
        $('#topic_list .topic_title').each(function(idx, element) {
            var $element = $(element);
            var href = url.resolve(cnodeUrl, $element.attr('href'));
            topicUrls.push(href);
        });
        res.send(topicUrls);
    });
});
app.listen(3000, function() {
    console.log('3000端口启动啦~~')
})