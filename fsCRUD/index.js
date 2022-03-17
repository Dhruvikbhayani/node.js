// const fs= require('fs')

// ------------------------------------Sync----------------------------------
// create folder 
// fs.mkdirSync('node.js');

// fs.writeFileSync("bio.txt","my name is Dhruvik Bhayani")

// fs.appendFileSync("bio.txt","  my age 20")

// const data=fs.readFileSync("bio.txt","utf8")
// console.log(data)

// fs.renameSync("bio.txt","fsCRUD/mybio.txt")

// delete file 
// fs.unlinkSync("File name")

// folder A delete
// fs.rmdirSync("folder name")

// -------------------------------------------------------Async-----------------------------------------

const fs = require('fs')

// fs.writeFile("bio.txt","My name is Dhruvik","utf8",(err)=>{
//     console.log("file created")
// })

// fs.appendFile("bio.txt","My age 20","utf8",(err)=>{
//     console.log(err)
// })

// fs.readFile("bio.txt","utf8",(err,data)=>{
//     console.log(err)
//     console.log(data)
// })

fs.rename("bio.txt","mybio.txt",(err)=>{
    console.log(err)
})