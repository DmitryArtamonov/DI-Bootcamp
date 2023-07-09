const getNumber = require('./main.js');

const result = getNumber.largeNumber + 5;

console.log(result);


// Part II:
// Before starting the exercises, check out the lesson named Node.js Application in the Course Notes.

// In the script.js file create a server using the http module (require('http')).

// Create a server instance and bind it at port 3000. Therefore your server should run on http://localhost:3000/. When the server run, you should console.log("I'm listening") in the terminal.

// Set the response header to res.setHeader('Content-Type', 'text/html')(look at this tutorial- Part named “Serving HTML)

// Respond (res.end) with a HTML paragraph saying "My Module is <result from Part I>", and an HTML <h1> saying “Hi there at the frontend”

const http = require("http");
const server = http.createServer((req, res)=> {
    console.log('I am listening....');
    res.setHeader('Content-Type', 'text/html')
    res.write("<p>My Module is " + result + '</p>');
    res.end('<h1>Hi there at the frontend</h1>');
    
  }).listen(3000);
