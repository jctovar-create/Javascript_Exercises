var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res){
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar:thing});
});

app.get("/posts", function(req,res){
    var posts = [
            {title: "Post 1", author : "Susy"},
            {title: "Post 2", author : "Max"},
            {title: "Post 3", author : "Betty"}
        ];
    res.render("posts.ejs", {posts: posts});
});

app.get("/boxer", function(req, res){
    res.send("Welcome to the Boxers Page"); 
});

app.get("/aldo", function(req, res){
    res.send("This Aldo's Page"); 
});

app.get("/fox", function(req, res){
    res.render("fox.ejs"); 
});

app.get("/missy", function(req, res){
    res.render("missy.ejs");
});

app.get("/dog/:name", function(req, res){
    var name = req.params.name;
    res.render("dogname.ejs", {nameVar : name});
});

app.get("*", function(req, res){
    res.send("This isn't a real page"); 
});

app.listen(8080, function(){
    console.log("server is listening");
});