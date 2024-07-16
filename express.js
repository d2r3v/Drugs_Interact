// const express = require(express);
// const app = express();
// const port = 3000;
// app.listen(port, () => {
// console.log(`Server is running on port ${port}`);
// });

// const Eventemit = require('./app')

// Eventemit.on('temp' , () => {
//     console.log("test");
// });

const myEmitter = require('./app.js'); // Import the instance

// Listen for the event
// myEmitter.on('event', (message) => {
//     console.log(`Received message: ${message}`);
// });

// setTimeout(() => {}, 5000);

console.log("test");

const eventPromise = new Promise((resolve) => {
    myEmitter.on(new Event, resolve);
});


// Use async/await to handle the event
(async () => {
    const message = await eventPromise;
    console.log(`Received message: ${message}`);
})();