// 라우팅

const http = require("http");

const server = http.createServer((req, res) => {
    // req.url = 요청 경로
    // req.method = 요청 방식

    const {url, method} = req;
    // const url = req.url;
    // const method = req.method;

    res.setHeader("Content-type", "text/plain");

    if (method === "GET" && url === "/home") {
        res.write("HOME");
        res.end();
    } else if (method === "GET" && url === "/about") {
        res.end("ABOUT")
    } else {
        res.end("NOT FOUND")
    }
});

server.listen(3000, () => {
    console.log("서버가 실행 중");
})