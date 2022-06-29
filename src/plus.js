// const obj = {}; // plus 함수를 obj 객체를 통해 접근할 수 있도록 만들어줍니다.

// (() => {
//     function plus(a, b) {
//         return a + b;
//     }

//     obj.plus = plus;
// })();

// 모듈 시스템
export function plus(a, b) {
    return a + b;
}