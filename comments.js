// Create web server
var express = require('express');
var app = express();
var fs = require("fs");
var bodyParser = require('body-parser');
var comments = require('./comments.json');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/comments', function (req, res) {
    fs.readFile( __dirname + "/" + "comments.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });
});

app.post('/comments', function (req, res) {
    var comment = req.body;
    comments.push(comment);
    fs.writeFile(__dirname + "/" + "comments.json", JSON.stringify(comments), function (err) {
        if (err) {
            console.error(err);
        }
    });
    res.end("Comment added");
});

var server = app.listen(8081, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("App listening at http://%s:%s", host, port);
});