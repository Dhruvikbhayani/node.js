// the http.createserver() method includes request and resopnse  pramaters whaich is supplied by node.js

// the request  object  can be used to get informations about the current http request
//e.g., url,request header , and data.

//the response  object can be used to send a response for a current http request

//If the response from the http server is supposed to displayed as HTML
//you should include an HTTP header with the current content type.

const http = require('http');
const fs = require('fs')

const server = http.createServer((req, res) => {


    const data = fs.readFileSync(`${__dirname}/userapi/useapi.json`, "utf8", )
    const object = JSON.parse(data)


    // console.log(req.url)
    if (req.url == "/") {
        res.end("Hello for home page ");
    } else if (req.url == "/about") {
        res.end("Hello for about page ");
    } else if (req.url == "/contact") {
        res.write("Hello for contact page")
        res.end();
    } else if (req.url == "/userapi") {
        // fs.readFile(`${__dirname}/userapi/useapi.json`, "utf8", (err, data) => {
        //         console.log(data)
        //         const object = JSON.parse(data)
        res.writeHead(200, { "content-type": "applications/json" })
        res.end(object[0].name)
            //         res.end()
            // })

    } else {
        res.writeHead(404, { "content-type": "text/html" })
        res.end("<h1>404 error </h1>");
    }
});
server.listen(5020, () => {
    console.log("port is run")
})