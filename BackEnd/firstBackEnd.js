const express = require('express')



const app = express()

app.use((req,res,next)=>{
    console.log("Hello i am from middleware")
    console.log(req)
    next();
})

app.get('/',function (req,res){
    res.send("Hello Baby")
})

app.get("/npm", (req,res)=>{
    res.send("https://www.npmjs.com/package/express")

})
 

app.listen(1200)    