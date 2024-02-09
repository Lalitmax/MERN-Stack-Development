// const express = require('express')
import express from "express";
import 'dotenv/config'

const jokes = [

    {
        id: 1,
        title: 'A joke',
        content: 'This is a joke'
    },
    {
        id: 2,
        title: 'A joke',
        content: 'This is a joke'
    },
    {
        id: 3,
        title: 'A joke',
        content: 'This is a joke'
    },
    {
        id: 4,
        title: 'A joke',
        content: 'This is a joke'
    },
    {
        id: 5,
        title: 'A joke',
        content: 'This is a joke'
    },

]


const app = express();

app.get('/', (req, res) => {
    res.send("Server ready ")
})

app.get('/api/jokes', (req,res)=>{
    res.send(jokes)
})

const port=process.env.PORT;

app.listen(port, () => {
    console.log(`Server run at http://localhost:${port}`);
})