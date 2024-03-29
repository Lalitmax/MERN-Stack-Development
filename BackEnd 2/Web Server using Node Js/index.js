const http = require('http')

const fs = require('fs');
const { type } = require('os');
const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

const indexhtml = fs.readFileSync('index.html', 'utf-8');

const products = data.products;


const server = http.createServer((req, res) => {
    console.log('Server started')

    const url = req.url;
    let id = parseInt(url.split('/')[2]);

    const product = products.find(p => p.id === id)
    if (url.startsWith('/product')) {
        res.setHeader('Content-Type', 'text/html')
        
        let modifiedIndexhtml = indexhtml.replace('**title**', product.title).replace('**url**', product.thumbnail).replace('**price**', product.price)
        res.end(modifiedIndexhtml)
        return;

    }


    switch (url) {
        case '/':
            res.setHeader('Content-Type', 'text/html')
            res.end('<h1>Home</h1>')
            break;
        case '/api':
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify(data))
            break;
        default:

            res.writeHead(404, 'Not Found from lalit')
            res.end()

    }




    // res.setHeader('Dummy', 'dummyValue')
    // res.setHeader('Content-Type', 'text/html')
    // // res.setHeader('Content-Type', 'application/json')
    // res.end(indexhtml)
})


server.listen(8080, () => {
    console.log("http://localhost:8080")

})