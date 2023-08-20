// 배열 num의 요소를 reduce 메소드를 사용하여 처리하는 코드를 작성하세요.

const num = [2, -4, 6, 0, 7, -3, 1];

const 누적합 = num.reduce((a, c) => a+c)
const 최댓값 = num.sort().pop()


console.log("누적합:", 누적합);
console.log("최댓값:", 최댓값);