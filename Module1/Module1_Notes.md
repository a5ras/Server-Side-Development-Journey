# Module 1: Introduction to Node.js & Server-Side Development

## 1. What is Backend Development?

Backend development (server-side) creates the logic that users do not see but is essential for the application's function. It creates the "server-side logic," including code pertaining to databases, servers, and applications.

### Key Differences: Frontend vs. Backend
* **Frontend (Client-side):**
    * Runs on the client machine (web browser).
    * Includes the browser engine.
    * Technologies: HTML, CSS, JavaScript, Frontend Frameworks (React, Angular, Vue.js).
    * Focus: Interface, visual experiences, user interactions.
* **Backend (Server-side):**
    * Runs on a server.
    * Focus: Performance, Scalability, Security, Authentication, Data Management.
    * Technologies: Servers, Databases, Web APIs, Languages (Node.js, Python, Java, Ruby, PHP, C#).

### Components of the Backend
1.  **Servers:** Hardware/Software providing functionality to clients.
    * **Web Servers:** Respond to client requests (often using HTTP). Controls how users access hosted files.
    * **Database Servers:** House, retrieve, and deliver data.
    * **Application Servers:** Sit between the database and web server. They transform data into dynamic content and run business logic (rules for data storage/transfer).
2.  **Databases:** Structured collections of data.
    * **SQL:** MySQL, PostgreSQL, SQLite.
    * **NoSQL:** MongoDB, Cassandra, Redis.
3.  **APIs (Application Programming Interfaces):** Allow software to communicate.
    * **Web Services:** A type of API communicating via HTTP.
4.  **Runtimes:** Infrastructure supporting code execution (e.g., Node.js).
5.  **Frameworks:** Provide structure and generate code for common tasks (e.g., Express.js, Django, Rails).

### Responsibilities
* **Scalability:** Ability to handle load (concurrent users, transactions, data volume) dynamically without affecting performance.
* **Security:** Authentication and prevention of malware attacks.
* **Performance:** Efficient data retrieval and content delivery.

---

## 2. Getting Started with Node.js

### The Full-Stack Architecture
1.  **Client Side:** User-facing website/mobile app.
2.  **Server Side:** Processes requests, often hosted on the cloud.

### Why Node.js?
* **Cross-Platform:** Runs on Linux, Windows, Mac OSX.
* **Open Source:** No special licenses required.
* **V8 Engine:** Node.js runs on Google Chrome's open-source V8 JavaScript engine. It converts JS code into machine-readable code.
* **Unified Language:** Allows using JavaScript on both Frontend and Backend (reduces context switching for developers).

### Node.js Architecture Characteristics
Node.js is **Single-Threaded**, **Event-Driven**, **Asynchronous**, and **Non-Blocking**.
* **Single-Threaded:** Processes one command at a time (unlike multi-threaded servers).
* **Non-Blocking:** While executing a process (like I/O), it does not wait. It continues to the next task.
* **Event-Driven:** Input/Output (I/O) operations trigger events. When a response is received, an event fires to resume the operation.
* **Benefit:** Handles high concurrency (thousands of connections) faster than many other languages.

### JSON Payload (Data Exchange)
Data is transmitted between client and server as **JSON** (JavaScript Object Notation) in "key-value" pairs.

**Request Example:**
```json
{
  "name": "John",
  "age": "24",
  "email": "johnparker@gmail.com"
}
````

*Accessing data:* **request.name**

**Response Example:**

```json
{
  "status": "ok",
  "message": "Successfully added"
}
```

-----

## 3\. Application Flow: Client to Server

### Scenario: Web Service Call

1.  **User Action:** User selects an option in the HTML/CSS UI.
2.  **Client Logic:** JavaScript triggers business logic (e.g., input validation).
3.  **Request:** JS application makes a REST web service call over HTTP with a JSON payload.
4.  **Server Processing:**
      * The **Node.js server** intercepts the request.
      * The application processes the request (unlike traditional models using Java/PHP, this is done via Node.js).
5.  **Response:** Server returns the result as a JSON payload.

-----

## 4\. Modules in Node.js (Import and Require)

**Definition:** Modules are encapsulated code (single files or folders) serving a specific purpose.
**Package:** A directory with one or more modules bundled together.

### Module Specifications

1.  **CommonJS (CJS):** Default in Node.js. Uses *require* and *module.exports*. Extension: *.js*.
2.  **ES Modules (ESM):** Modern standard. Uses *import* and *export*. Extension: *.mjs*.

### Comparison: *require* vs *import*

| Feature | *require()* (CommonJS) | *import()* (ES Modules) |
| :--- | :--- | :--- |
| **Placement** | Anywhere in the file (conditional statements allowed) | Must be at the beginning of the file |
| **Binding** | Dynamic (errors identified at runtime) | Static (errors identified at compile time) |
| **Execution** | Synchronous (linear processing) | Asynchronous (simultaneous processing) |
| **Speed** | Slower for large scale | Faster for large applications |

### Code Examples

**1. CommonJS Export/Import**
*File: message.js*

```javascript
module.exports = "Hello programmers";
```

*File: app.js*

```javascript
let msg = require('./message.js');
console.log(msg);
```

**2. ES Module Export/Import**
*File: module.mjs*

```javascript
const a = 1;
export { a as myValue };
```

*File: main.mjs*

```javascript
import { myValue } from './module.mjs';
```

-----

## 5\. Creating a Web Server with Node.js

To create a server, we use the core **HTTP** module.

**Steps:**

1.  Import the http module.
2.  Use http.createServer().
3.  Define a callback function with req (request) and res (response).
4.  Set the server to listen on a specific port.

**Code Example:**

```javascript
const http = require('http');

// Create server instance
const server = http.createServer((req, res) => {
    // Handle incoming request
    res.write('Hello from server'); // Send response body
    res.end(); // End response
});

// Listen on port 8080
server.listen(8080);
```

-----

## 6\. Advanced Node.js Modules (Core Library)

These modules are built-in and do not need installation.

### A. HTTP Module

Used to transfer data over HTTP.

```javascript
let http = require('http');
http.createServer(function (req, res) {
    res.write('hello from server');
    res.end();
}).listen(6000);
```

### B. File System (fs)

Interacts with the file system (Read/Write).

**Asynchronous Read:**

```javascript
const fs = require('fs');
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
```

**Synchronous Read:**

```javascript
const fs = require('fs');
const data = fs.readFileSync('/content.md', 'utf8');
console.log(data);
```

### C. OS Module

Retrieves operating system details.

```javascript
let os = require('os');
console.log("Platform: " + os.platform());
console.log("Architecture: " + os.arch());
```

### D. Path Module

Manipulates directory and file paths.

```javascript
const path = require('path');
let result = path.basename('/content/index/home.html');
console.log(result); // outputs: home.html
```

### E. Util Module

Internal utilities (e.g., formatting strings for debugging).

```javascript
let util = require('util');
let str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++) {
    console.log(util.format(str, i));
}
```

### F. URL Module

Parses web addresses into parts.

```javascript
const url = require('url');
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
let qry = url.parse(webAddress, true);
let qrydata = qry.query; 
console.log(qrydata.firstName); // outputs: Clark
```

### G. Querystring Module

Parses the query string of a URL.

```javascript
let qry = require('querystring');
let qryParams = qry.parse('lastName=Kent&firstName=Clark');
console.log(qryParams.firstName); // returns Clark
```

-----

## 7\. NPM (Node Package Manager)

**Definition:** A tool to manage modules and packages containing dependencies.
**Dependencies:** Code (libraries/packages) reused in a program.

### Functions of NPM

1.  **CLI (Command Line Interface):** To publish/download packages.
2.  **Repository:** Online database of JavaScript packages.

### package.json

Must exist in the project root. Contains metadata:

  * Project Name & Version.
  * Dependencies list.
  * License (e.g., "copyleft" requires sharing modifications).
  * main: The entry point script (defaults to index.js).

### Installation Types

1.  **Local Install:**
      * Command: npm install <package_name>
      * Stores in: node_modules` in current directory.
      * Usage: Only for the specific application.
2.  **Global Install:**
      * Command: npm install -g <package_name>
      * Usage: Accessible by *all* applications on the machine. Use judiciously to avoid version conflicts.

-----

## 8\. Basic JavaScript Concepts for Backend

### Variables

  * *let*: Mutable variable (block scope).
  * *const*: Immutable variable.
  * *var*: Function-scoped (older syntax).

### Functions

  * **Declaration:** function greet(user) { ... }
  * **Arrow Function:** const add = (a, b) => a + b;
  * **Anonymous Function:** A function without a name, often used as a callback.

### Array Methods (Data Transformation)

  * *filter*: Selects items based on a condition.
  * *map*: Transforms every item in an array.
  * *reduce*: Calculates a single value (e.g., sum) from an array.

### JSON Handling

  * JSON.parse(data): Converts JSON string to JS Object.
  * JSON.stringify(object): Converts JS Object to JSON string.

-----

## 9\. Express.js Basics

Express is a framework running on Node.js that abstracts lower-level APIs to simplify server creation.

### Simple Express Server

```javascript
const express = require("express");
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// Define a Route
app.get("/books", (req, res) => {
    res.json([{ title: "Learn Node", rating: 4 }]);
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

### Handling Request Data

1.  **req.params** (URL Path Variables):
      * Route: /users/:id
      * URL: /users/123
      * Access: req.params.id (="123")
2.  **req.query** (URL Query String):
      * URL: /books?author=JohnDoe
      * Access: req.query.author (="JohnDoe")
3.  **req.body** (JSON Payload):
      * Used in POST/PUT requests.
      * Access: req.body.username

-----

## 10\. Glossary

| Term | Definition |
| :--- | :--- |
| **Anonymous Function** | A function not named, often passed as a parameter. |
| **Asynchronous** | A process that runs independently of other processes. |
| **Callback Function** | Passed into another function to be invoked later (e.g., when I/O completes). |
| **Event-Driven** | Program flow is determined by events (clicks, messages, inputs). |
| **Middleware** | Code that sits between the raw request and the final route handler (e.g., Express). |
| **Single-Threaded** | Only one command processed at a time. |
| **Runtime Environment** | The infrastructure (hardware/software) where the codebase executes (e.g., Node.js). |
