const http = require('http');

const server = http.createServer((req, res)=>{

    // req is the request

    if(req.url === '/'){
        res.end('Welcome to our home page')
    }

    // res is response being sent back
    if(req.url === '/about'){

        res.end('Here is our short history')
    }

        res.end(`<h1>Oops!<h1>
        <p>Can not find what you are looking for</p>
        <a href="/">back home</a>`) // Link to navigate back
})
server.listen(5000)