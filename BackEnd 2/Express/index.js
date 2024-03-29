const express = require('express');
const fs = require('fs')
const server = express();
const morgan = require('morgan')
const data = fs.readFileSync('data.json', 'utf-8')

// BodyParser
server.use(express.json())
// server.use(express.urlencoded())
server.use(morgan('dev'))

// Middleware

server.use(express.static('public'))
server.use('/', (req, res, next) => {
    console.log(req.method, req.ip, req.hostname, new Date(), req.get('User-Agent'))
    next() // to go next() work
})

const auth = (req, res, next) => {
    console.log(req.query)
    // if(req.query.password==='123'){

    //     next() // to go next() work
    // }else{
    //     res.sendStatus(401);
    // }

    console.log(req.body)
    if (req.body.password === '123') {

        next() // to go next() work
    } else {
        res.sendStatus(401);
    }
}
// server.use(auth)




// Api Endpoint- Route

// server.get('/product/:id', (req, res) => {
//     console.log(req.params)
//     res.send({ type: 'GET' })
// })

server.get('/', auth, (req, res) => {
    res.send({ type: 'GET' })
})

server.post('/', auth, (req, res) => {
    res.send({ type: 'POST' })
})

server.put('/', (req, res) => {
    res.send({ type: 'PUT' })
})

server.delete('/', (req, res) => {
    res.send({ type: 'DELETE' })
})

server.patch('/', (req, res) => {
    res.send({ type: 'PATCH' })
})





server.get('/', (req, res) => {
    // res.sendStatus(404)
    // res.send('<h1>Hello</h1>')
    // res.json(data)

})

server.listen(8080, () => {
    console.log('Server Started at http://localhost:8080')
})