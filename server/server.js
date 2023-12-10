const express = require('express')
// initialse app object
const app = express()
const cors = require('cors')
app.get('/',(req,res) => {
    res.json({ message: "Welcome to Upgrad Movie booking application development." });
})
app.use(cors())
app.listen(3000,()=> {
    console.log("listening on port 3000")
})














// const http = require('http')
// const mongoose = require('mongoose')
// const url = require('./config/db.config')


// mongoose.connect(url)
// .then(() => {
//     console.log("Connected to the database!");
    
//   })
//   .catch(err => {
//     console.log("Cannot connect to the database!", err);
//     // process.exit();
//   });

// const server = http.createServer((req,res) => {
//     if(req.url === '/movies'){
//         res.end("All Movies Data in JSON format from Mongo DB")
//     }
//    else if(req.url === '/genres'){
//         res.end("All Genres Data in JSON format from Mongo DB")
//     }
//     else if(req.url === '/artists'){
//         res.end("All Artists Data in JSON format from Mongo DB")
//     }
// })



// server.listen(9000,() => {
//     console.log("Listening on port 9000")
// })