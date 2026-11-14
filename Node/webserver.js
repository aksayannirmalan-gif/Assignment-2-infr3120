//import/use the module
const http = require('http');
const hostname = '127.0.0.1'; /**creates the local host */
const port = 4000; /** port being used as server port */

const server = http.createServer((req,res) =>{ /**creates an http server */
    res.statusCode=200; /**200 is used to tell say that something is successful for the web development */
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});