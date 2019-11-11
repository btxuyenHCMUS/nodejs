var express = require("express");
var app = express();

var multer = require("multer");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

app.listen(4000, function(){
    console.log("Conected!")
});

// configuration EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Setup place upload file on server
var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './upload')
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
});
var upload = multer({storage:storage});

// upload file
app.post("/upload", upload.single("file"), function(req, res){
    console.log(req.file);
    res.send("Upload successful!");
});

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

app.get("/agruments", function(req, res){
    res.render("agruments", {username: "BUI TRONG XUYEN"});
});

app.get("/array", function(req, res){
    res.render("array", {year: [1999, 2000, 2001, 2002, 2003]});
});

app.get("/", function(req, res){
    res.render("form");
});