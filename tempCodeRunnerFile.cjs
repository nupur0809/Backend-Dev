const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  // Only allow GET requests
  if (req.method !== 'GET') {
    res.writeHead(405, { 'Content-Type': 'text/plain' });
    return res.end('Method Not Allowed');
  }

  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;

  // Route: /
  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Node.js HTTP Server');
  }

  // Route: /about
  else if (path === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <head><title>About</title></head>
        <body>
          <h1>About Page</h1>
          <p>This server is built using Node.js http module.</p>
        </body>
      </html>
    `);
  }

  // Route: /user
  else if (path === '/user') {
    const { name, age } = parsedUrl.query;

    const userData = {
      name: name || 'Unknown',
      age: age || 'Not provided'
    };

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(userData));
  }

  // Invalid routes → 404
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Page Not Found');
  }
});

server.listen(3007, () => {
  console.log('Server is running on http://localhost:3007');
});
