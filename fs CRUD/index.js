const fs= require('fs')

// create folder 
// fs.mkdirSync('node.js');

// fs.writeFileSync("bio.txt","my name is Dhruvik Bhayani")

// fs.appendFileSync("bio.txt","  my age 20")

// const data=fs.readFileSync("bio.txt","utf8")
// console.log(data)

fs.renameSync("bio.txt","fsCRUD/mybio.txt")