// json stands for javascript object notation
//json is a lightweight
//format for storing and transporting data.
//json is often used when data is sent from a server to a web page 

const fs=require('fs')
const biodata ={
    name:"Dhruvik",
    age:20,
    channel:"Dhruvik Bhayani"
}
// console.log(biodata.name)

// convert to object
// const objdata=JSON.parse(jsondata)
// console.log(objdata)                                                      //{ name: 'Dhruvik', age: 20, channel: 'Dhruvik Bhayani' }

// 1:convert to json 
//2: dusre file me add karna he
//3: readfile
//4:again convert back to js obj 
//5:console.log

const jsondata=JSON.stringify(biodata)
// console.log(jsondata)                                                //{"name":"Dhruvik","age":20,"channel":"Dhruvik Bhayani"}
// fs.writeFile("json1.json",jsondata,function(err){
//     console.log("done")
// })
fs.readFile("json1.json","utf-8",(err,data)=>{
    const orgdata=JSON.parse(data)
    console.log(data)
    console.log(orgdata)
})




