const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.listen(8080, function () {
    console.log('Server is running on port 8080');
});

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/say-hello', (req, res) => {
    res.sendFile(__dirname + '/main.html');
})