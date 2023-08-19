// 문제: 배열 내의 모든 숫자를 제곱한 새로운 배열을 만드세요.

const numbers = [2, 3, 5, 7, 11];

function squaredNumbers (){
    return numbers.map(i => i**2)
}

console.log(squaredNumbers());


// 문제: 주어진 배열에서 홀수인 숫자들만 제곱한 새로운 배열을 만드세요. 그리고 해당 배열의 모든 숫자를 더한 값을 구하세요.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const squaredOddNumbers = numbers.filter(i => i%2 !==0).map(i => i**2)

console.log(squaredOddNumbers)

function sum() {
    return squaredOddNumbers.reduce((a, c) => a + c, 0);
}

console.log(sum())