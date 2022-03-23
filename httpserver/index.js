// the http.createserver() method includes request and resopnse  pramaters whaich is supplied by node.js

// the request  object  can be used to get informations about the current http request
//e.g., url,request header , and data.

//the response  object can be used to send a response for a current http request

//If the response from the http server is supposed to displayed as HTML
//you should include an HTTP header with the current content type.

const http=require('http');
const { type } = require('os');
const server=http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url =="/"){
      res.end("Hello for home page ");
    }else if(req.url=="/about"){
      res.end("Hello for about page ");
    }else if (req.url=="/contact"){
      res.write("Hello for contact page")
      res.end();
    }else{
      res.writeHead(404,{"content-type":"text/html"})
      res.end("<h1>404 error </h1>");
    }
});
server.listen(5020,()=>{
    console.log("port is run")
})