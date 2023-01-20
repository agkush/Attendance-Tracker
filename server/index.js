const { application } = require('express')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
app.post("/api/login",function(req,res){
    res.send("Hello there");
    res.json({
        name :"Aryan",
        branch:"CS",
    });
});
app.post("/api/login",function(req,res){
    
})

app.listen(3000)