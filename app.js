const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hello from this NodeJS app!</h1>
    <h1>This is my update 11/09 WITH CI CD</h1>
    <p>Try sending a request to /error and see what happens</p>
    <p>ONE MORE PARAGRAPH</p>
  `);
});

app.get('/about', (req, res) => {
  res.send(`
    <h1>This is the ABOUT PAGE from Docker</h1>
    <h2>DIGITAL OCEAN</h2>
  `);
});

app.get('/error', (req, res) => {
  process.exit(1);
});

app.listen(8081);
