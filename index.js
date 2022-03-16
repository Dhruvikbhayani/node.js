// v=3 
// console.log("Hello ")

// v=4
// REPL 
// 1. js Expression
//2. use variable 
//3.Multiine code / loop
//4.use(_) to get the last result
//5.we can use editor mode

// v=4
// FS Module
 
const fs = require('fs')       

// create a new file 
// fs.writeFileSync("read.txt","Welcome to my chanccel")    

// file in add content
// fs.appendFileSync("read.txt","Hello How are you I am fine")

// read a file 
// const data=fs.readFileSync("read.txt")
// org_data=data.toString()
// console.log(org_data)
 
// Node.js includes an additional data type called Buffer
//(note  availabele in broweser's javascript)
//Buffer is mainly used to store binary data,
//while reading  from  a file  or receiving  packets over the network

// to reaname the file

fs.renameSync("read.txt","readwrite.txt")