const express = require('express')
const app = express()
// app.listen(3000)


app.get("/",function(req,res){
    res.send("<h2> Hi from express-nodeJs</h2>")
})


app.listen(3000,function(){
    console.log("server started at 3000")
})