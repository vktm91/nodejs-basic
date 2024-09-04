// path 모듈 연습하기
const path = require('javascript-basic/path');

// join
const fullPath = path.join('some', 'work', 'ex.txt');
console.log(fullPath);

// 경로만 추출 - dirname
const dirname = path.dirname(fullPath);
console.log(dirname);

// 파일 이름만 추출 - basename
console.log(`전체 경로(__filename): ${__filename}`);

const fileName = path.basename(__filename);
console.log(fileName);

const fileNameWithoutExt = path.basename(__filename, '.js');
console.log(fileNameWithoutExt);