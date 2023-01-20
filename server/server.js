// const { application } = require('express')
const express = require('express')
const app = express()



app.get("/",function(request,response){
  res.sendFile(__dirname + "/firstpage.html");
});

//server listen to port 3000
app.listen(3000);