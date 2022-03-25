// 2nd way 
//reading from streams
//create a readable stream
//handle streams events -> data,error,and end

const fs = require('fs');
const http = require('http')

const server = http.createServer();

server.on('request', (req, res) => {
    // fs.readFile("input.txt", "utf8", (err, data) => {
    //         if (err) console.log(err);
    //         res.end(data.toString())
    //     })

    // ------------------------------------------------------------------------------------------------------
    // 2nd way 
    //reading from streams
    //create a readable stream
    //handle streams events -> data,error,and end

    //     const rstream = fs.createReadStream('input.txt')

    //     rstream.on("data", (chundata) => {
    //         res.write(chundata)
    //     })
    //     rstream.on("end", () => {
    //         res.end()
    //     })
    //     rstream.on("error", (error) => {
    //         console.log(error)
    //         res.end("file not found")
    //     })
    // -----------------------------------------------------------------------------------------------------------
    //pipes()
    const rstream = fs.createReadStream('input.txt')
    rstream.pipe(res)

})
server.listen(8000, () => {
    console.log("port is run")
})