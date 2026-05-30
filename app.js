const http = require('http');

http.createServer((req, res) => {
    res.write("First Internship Assignment  ");
    res.end();
}).listen(5013);

console.log("Server running on port 5013 Successfully ✅");
