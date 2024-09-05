// fs 모듈의 readdir 함수 연습하기

const fs = require("fs");

fs.readdir("./", (err, files) => {
    if (err) {
        console.log(err);
    }
    console.log(files);
})
fs.readFile("./example.txt", "utf8", (err, data) => {
    if (err) {
        console.log(err);
    }
    fs.writeFile("./text.txt", data, (err) => {
        if (err) {
            console.log(err);
        }
        console.log('text.txt is saved');
    })
})