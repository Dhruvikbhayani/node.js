//Events Module
//node.js has a built-in module,called "Events"
//example 1- Registering for the event to be fired only one time using once.
//example 2- create an event emitter   instance and register a couple of callbacks 
//example 3- Registering for the event with callbacks parameters


const EventEmitter = require('events')
    // const event=require('events')
const event = new EventEmitter();
// event.on("saymyname", () => {
//     console.log("your name is bhayani")
// })
// event.emit("saymyname")

event.on('checkpage', (sc, msg) => {
    console.log(`this is status code ${sc} and the page is ${msg}`)
})

event.emit("checkpage", 200, "ok")