const path = require('path')
// console.log(path.dirname('C:\Users\Dell\Desktop\node.js\parthmodule/path.js'))

// console.log(path.extname('C:\Users\Dell\Desktop\node.js\parthm odule/path.js'))

// console.log(path.basename('C:\Users\Dell\Desktop\node.js\parthm odule/path.js'))

// console.log(path.parse('C:\Users\Dell\Desktop\node.js\parthm odule/path.js'))

const mypath=path.parse('C:\Users\Dell\Desktop\node.js\parthm odule/path.js')
console.log(mypath.name)