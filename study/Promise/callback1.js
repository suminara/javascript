// 문제: 사용자에게 두 숫자를 입력받고, 입력된 두 숫자를 더한 결과를 출력하는 자바스크립트 프로그램을 작성하세요. 그러나 숫자를 입력받는 부분과 결과를 출력하는 부분은 각각 비동기적으로 처리되어야 합니다.

// 사용자에게 첫 번째 숫자를 입력받기 위한 콜백 함수 getFirstNumber(callback)를 작성하세요. 이 함수는 숫자를 입력받은 후 콜백 함수를 호출해야 합니다.

// 사용자에게 두 번째 숫자를 입력받기 위한 콜백 함수 getSecondNumber(callback)를 작성하세요. 이 함수도 숫자를 입력받은 후 콜백 함수를 호출해야 합니다.

// 두 숫자를 더하는 함수 addNumbers(a, b, callback)를 작성하세요. 이 함수는 두 숫자를 더한 결과를 콜백 함수를 호출하여 출력해야 합니다.

// 마지막으로 이러한 함수들을 조합하여 두 숫자를 입력받고 결과를 출력하는 자바스크립트 프로그램을 작성하세요.

function getFirstNumber(callback){
    const num1 = parseInt(prompt('number 1?'))
    callback(num1)
}

function getSecondNumber(callback) {
    const num2 = parseInt(prompt('number 2?'))
    callback(num2)
}

function addNumbers(a, b, callback){
    callback(a+b)
}

getFirstNumber(function (num1) {
    getSecondNumber(function (num2) {
        addNumbers(num1, num2, function (result) {
            console.log('두 숫자의 합:', result);
        });
    });
});