var express = require("express");
var app = express();
app.listen(4000);

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

// configuration EJS
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/trongxuyen", function(req, res){
    res.render("trongxuyen");
});

// localhost:4000/hello
app.get("/hello", function(req, res){
    res.send("<h1 style='color:red;'>Bui Trong Xuyen</h1>")
});

// username, password
app.post("/login", urlencodedParser, function(req, res){
    var u = req.body.username;
    var p = req.body.password;
    res.send("Username:" + u + " Password:" + p);
});

app.post("/hello", function(req, res){
    res.send("<h1>Bui Trong Xuyen</h1>")
});

app.get("/tintuc/:id", function(req, res){
    var i = req.params.id;

    res.send("Server nhan duoc id=" + i);
});
