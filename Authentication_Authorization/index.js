const cookieParser = require('cookie-parser');
const express = require('express');
const jwt = require('jsonwebtoken')
const app = express()
const secret = "maxorsecret"
app.use(cookieParser())
app.get('/', (req, res) => {
    let token  = jwt.sign({email: "lalitmax@gmail.com"},secret)
    res.cookie("token",token)
    console.log(req.cookies)
    res.send('<h1>Hello Authentication</h1>');
});

app.get('/read',(req,res)=>{
    let data = jwt.verify(req.cookies.token,secret);
    console.log(data)
    res.send("ok")
})
// Start the server
app.listen(8000, () => {

    console.log(`Server is running on http://localhost:8000`);
});