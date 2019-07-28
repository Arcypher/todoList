const port = 3000;

const express = require("express");
const https = require('https');
const app = express();
var fs = require('fs');

app.use(express.static("styles")); //use content in styles directory
app.use(express.static("scripts")); //use content in styles directory
app.set("view engine", "ejs");

//root route
app.get("/", function(req, res){
	res.render("todo");
});

//start the server in port 3000
app.listen(port, function(){
	console.log("Server is listening on respective port.")
});