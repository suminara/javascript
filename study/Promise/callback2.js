// 문제: 주어진 숫자 배열에서 짝수 숫자만 골라서 그 합을 계산하는 자바스크립트 프로그램을 작성하세요. 이를 위해 콜백 함수를 사용하세요.

// 주어진 숫자 배열을 생성하세요. 예를 들어, [1, 2, 3, 4, 5, 6]와 같은 배열을 사용할 수 있습니다.

// 배열에서 짝수 숫자만 골라내기 위한 콜백 함수 filterEvenNumbers(arr, callback)를 작성하세요. 이 함수는 짝수 숫자로 이루어진 새로운 배열을 생성하고, 콜백 함수를 호출하여 결과 배열을 전달해야 합니다.

// 골라낸 짝수 숫자의 합을 계산하기 위한 콜백 함수 calculateSum(arr, callback)를 작성하세요. 이 함수는 짝수 숫자로 이루어진 배열과 짝수 숫자의 합을 콜백 함수에 전달해야 합니다.

// 마지막으로 이러한 함수들을 조합하여 주어진 배열에서 짝수 숫자의 합을 계산하는 자바스크립트 프로그램을 작성하세요.

const array = [1, 2, 3, 4, 5, 6]

function filterEvenNumbers(arr, callback) {
    const even = arr.filter(i=>i%2===0)
    callback(even)
}

function calculateSum(arr, callback) {
    const sum = arr.reduce((a,b) => a+b)
    callback(arr,sum)
}

filterEvenNumbers(array, (even)=>{calculateSum(even,(even,sum)=>{console.log([even,sum])})})