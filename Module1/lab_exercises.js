/*
  MODULE 1 LAB EXERCISES
  This file contains the practical code examples from the course text.
  You can run this file using the command: node lab_exercises.js
*/

// 1. IMPORTING CORE MODULES
const http = require('http');
const fs = require('fs');
const os = require('os');
const path = require('path');
const url = require('url');
const util = require('util');

console.log("--- STARTING LAB EXERCISES ---\n");

// ---------------------------------------------------------
// EXERCISE 1: THE OS MODULE (Operating System Info)
// ---------------------------------------------------------
console.log("1. OS MODULE INFO:");
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());
console.log("\n---------------------------------------------------------");

// ---------------------------------------------------------
// EXERCISE 2: THE PATH MODULE (Handling File Paths)
// ---------------------------------------------------------
console.log("2. PATH MODULE:");
// Example: Get the filename from a full path
let pathResult = path.basename('/content/index/home.html');
console.log("Basename of '/content/index/home.html' is: " + pathResult);
console.log("\n---------------------------------------------------------");

// ---------------------------------------------------------
// EXERCISE 3: THE URL MODULE (Parsing Web Addresses)
// ---------------------------------------------------------
console.log("3. URL MODULE:");
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
let qry = url.parse(webAddress, true);
let qryData = qry.query; // returns an object: {lastName: 'Kent', firstName: 'Clark'}

console.log("Full URL: " + webAddress);
console.log("Extracted First Name: " + qryData.firstName); 
console.log("\n---------------------------------------------------------");

// ---------------------------------------------------------
// EXERCISE 4: THE FILE SYSTEM (FS) MODULE
// ---------------------------------------------------------
console.log("4. FILE SYSTEM (FS) MODULE:");

// Note: We will create a temporary file to read from so this code works without errors.
fs.writeFileSync('sample.txt', 'This is a test file for the lab.');

// Asynchronous Read
console.log("Reading 'sample.txt' asynchronously...");
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Content of sample.txt: " + data);
    
    // We continue to the server creation only after reading is done (to keep console clean)
    startServer(); 
});

// ---------------------------------------------------------
// EXERCISE 5: THE HTTP MODULE (Creating a Web Server)
// ---------------------------------------------------------
function startServer() {
    console.log("\n---------------------------------------------------------");
    console.log("5. HTTP MODULE (WEB SERVER):");
    
    const port = 6000;
    
    // Create the server
    const server = http.createServer((req, res) => {
        // Write a response to the client
        res.write('Hello from the Node.js Server!'); 
        res.end(); // End the response
    });

    // Listen on port 6000
    server.listen(port, () => {
        console.log(`Server is running! Open your browser and go to http://localhost:${port}`);
        console.log("(Press Ctrl+C to stop the server)");
    });
}
