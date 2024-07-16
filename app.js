// import axios from 'axios';

// const http = axios.create({
//   baseURL: 'https://example.com/api'
// });

// export function getUser(userId: string) {
//   // An equivalent to `GET /users?id=12345`
//   return http.get('/user', {
//     params: {
//       id: 12345
//     }
//   });
// }

// require("./express");

// app.get(/api/users, (req, res) => {
//   // Handle GET request for fetching users
//   });
//   app.post(/api/users, (req, res) => {
//   // Handle POST request for creating a new user
//   });

// const exp = require("./express.js");
// const os = require("os");
// const { EventEmitter } = require("stream");
// //Get current Operating System identifying platform 
// console.log(os.platform());

const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
// const temp = new Event( );

module.exports = MyEmitter;


setTimeout(() => {
  myEmitter.emit(new Event, 'Hello from eventTrigger.js!');
}, 2000);

