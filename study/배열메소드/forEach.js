

// 1. 주어진 배열 numbers의 각 요소에 대해 다음 작업을 수행하라:
//    a. 요소를 제곱하여 새로운 배열 squareNumbers를 만든다.
//    b. 요소를 2배로 늘려 새로운 배열 doubledNumbers를 만든다.
//    c. 요소를 문자열로 변환한 뒤 새로운 배열 stringNumbers를 만든다.
//    d. 각 요소의 홀/짝 여부를 판별하여 홀수면 true, 짝수면 false인 배열 evenOddStatus를 만든다.

// 위의 네 가지 배열을 모두 만들어 출력하시오.

// 예시 출력:
// squareNumbers: [1, 4, 9, 16, 25]
// doubledNumbers: [2, 4, 6, 8, 10]
// stringNumbers: ["1", "2", "3", "4", "5"]
// evenOddStatus: [true, false, true, false, true]

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.forEach(i => console.log(i**2))
const doubledNumbers = numbers.forEach(i => console.log(i*2))
const stringNumbers = numbers.forEach(i => console.log(i.toString()))
const evenOddStatus = numbers.forEach(i => console.log(i%2 !== 0 ? true : false))
