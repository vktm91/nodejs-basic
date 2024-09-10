// 요청 객체(req) 살펴보기

const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-type", "text/plain");
    res.write("Hello Node");
    res.end();
})

server.listen(3000, () => {
    console.log("서버가 실행 중");
})