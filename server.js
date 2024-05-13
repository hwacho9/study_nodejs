// use express library to create a server
const express = require('express');
const app = express();

// PORT　
app.listen(8080, () => {
    console.log('http://localhost:8080 Server is running on port: 8000');
})

// send index.html file
// __dirname is the directory name of the current module
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});