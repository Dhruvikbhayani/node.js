// 2nd way 
//reading from streams
//create a readable stream
//handle streams events -> data,error,and end

const fs = require('fs');
const http = require('http')

const server = http.createServer();

server.on('request', (req, res) => {
    var fs = require('fs')
    fs.readFile("input.txt", "utf8", (err, data) => {
        if (err) console.log(err);
        res.end(data.toString())
    })
})
server.listen(8000, () => {
    console.log("port is run")
})