const fs= require('fs');

// data write 
// fs.writeFile("gg.txt","today is awesome day :","utf8",function(err,data){
//     console.log(err )
// })

// add data 
// fs.appendFile("gg.txt","plz link share and sunds  my chanel ",(err)=>{
//     console.log(err)
// })

// read file 
fs.readFile("gg.txt","utf8",(err,data)=>{
 console.log(err)
console.log(data)
})