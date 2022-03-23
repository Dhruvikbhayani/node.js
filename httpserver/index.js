// the http.createserver() method includes request and resopnse  pramaters whaich is supplied by node.js

// the request  object  can be used to get informations about the current http request
//e.g., url,request header , and data.

//the response  object can be used to send a response for a current http request

//If the response from the http server is supposed to displayed as HTML
//you should include an HTTP header with the current content type.

const http=require('http')
const server=http.createServer((req,res)=>{

  res.end("Hello for other side ");
});
server.listen(5020,()=>{
    console.log("port is run")
})