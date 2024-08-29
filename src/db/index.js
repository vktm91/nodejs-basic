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








// require('dotenv').config();
// const { MongoClient } = require('mongodb');
//
// async function main() {
//     const uri = process.env.MONGODB_URI;
//
//     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//
//     try {
//         // 데이터베이스 연결
//         await client.connect();
//         console.log("Connected successfully to MongoDB");
//
//         // 데이터베이스와 컬렉션 선택
//         const database = client.db('myDatabase');
//         const collection = database.collection('myCollection');
//
//
//     } catch (err) {
//         console.error(err);
//     } finally {
//         // 클라이언트 연결 해제
//         await client.close();
//     }
// }
//
// main().catch(console.error);
