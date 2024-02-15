const express = require('express')

const app = express();


app.set("view engine", "ejs")

app.use(express.static('./public'))

app.get('/error', (req, res) => {
    throw new Error("Broken")
})

app.get('/', (req, res) => {
    res.render('index');
})

app.use(function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500)
    res.render('error', { error: err })
})

app.listen(3000, () => {
    console.log("Listen " + "http://localhost:3000")
})