const express = require('express')
const app = express()
const port = 5000

const uri = process.env.MONGODB_URI;

const mongoose = require('mongoose')
mongoose.connect('uri', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDb connected...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// app.use(express.static(__dirname + '/public'));
//
// app.listen(8080, function () {
//     console.log('Server is running on port 8080');
// });
//
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// })
//
// app.get('/say-hello', (req, res) => {
//     res.sendFile(__dirname + '/main.html');
// })