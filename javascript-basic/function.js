//// 함수 선언하고 호출하기

// 함수 선언
function greeting(name) {
    console.log(`${name}야 안녕!`);
}

// 함수 호출
greeting('멍멍이')



//// 함수 표현식으로 선언하고 호출하기

// 함수 선언
let greeting2 = function (name) {
    console.log(`${name}야 안녕!`);
}

// 함수 호출
greeting2('야옹이');



//// 함수 선언과 호출을 동시에
(function (a, b) {
    console.log(`두 수의 합: ${a + b}`);
}(10, 20));



//// 함수 표현식을 화살표 함수로 바꾸기

// 함수 표현식
// let hi = function () {
//     return '안녕';
// }

// 화살표 함수로 바꿔보기
let hi1 = () => {
    return '안녕';
}
console.log("hi1 호출 결과: ", hi1());
let hi2 = () => '안녕';   // 한 줄일때 더 간단히
console.log("hi2 호출 결과: ", hi2());



//// 매개변수가 있는 함수 표현식을 화살표 함수로 바꾸기

// 함수 표현식
// let sum = function (a, b) {
//     return a + b;
// }

// 화살표 함수로 바꿔보기
let sum1 = (a, b) => {
    return a + b;
}
console.log("sum1 호출 결과: ", sum1(10, 20));
let sum2 = (a, b) => a + b;   // 한 줄일때 더 간단히
console.log("sum2 호출 결과: ", sum2(10, 20));