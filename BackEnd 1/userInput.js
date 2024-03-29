const express = require('express')

const app =express()

app.use((req,res,next)=>{
    console.log("Midddleware")
    next();
})

app.get('/', (req,res)=>{
    res.send("HEllo Wolrd");
})

app.get('/profile', (req,res,next)=>{
    res.send("From profile")
     
})

app.get('/profile/:userName', (req,res)=>{
    res.send(`I am From ${req.params.userName}` )
})

app.listen(1200, ()=>{
    console.log('http://localhost:1200')
})