const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Node Server!');
});

const PORT = 5000;

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});