// Create web server
// 1. Create web server
// 2. Read html file
// 3. Read json file
// 4. Create a route
// 5. Create a callback function
// 6. Send response to client
// 7. Start web server
// 8. Test in browser

// 1. Create web server
const express = require('express');
const app = express();
const port = 3000;

// 2. Read html file
const fs = require('fs');
const index = fs.readFileSync('index.html');

// 3. Read json file
const data = fs.readFileSync('comments.json');
const comments = JSON.parse(data);

// 4. Create a route
app.get('/comments', (req, res) => {

    // 6. Send response to client
    res.send(comments);
});

// 7. Start web server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});