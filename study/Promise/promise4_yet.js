// 문제: 다음과 같은 요구사항을 충족하는 자바스크립트 프로그램을 작성하세요.

// 두 개의 숫자를 입력받는 함수 getNumbers()를 작성하세요. 이 함수는 사용자로부터 두 개의 숫자를 입력받아 프로미스를 반환해야 합니다.

// 두 숫자를 받아 더한 결과를 반환하는 함수 addNumbers(a, b)를 작성하세요. 이 함수는 프로미스를 사용하지 않습니다.

// getNumbers() 함수를 사용하여 두 숫자를 입력받고, 그 두 숫자를 addNumbers() 함수에 전달하여 더한 결과를 출력하세요. 결과를 출력할 때 .then()을 사용하여 프로미스 체이닝을 수행하세요.

// 이 문제를 해결하기 위해 프로미스를 사용하여 사용자로부터 입력을 받고, 프로미스 체이닝을 통해 두 숫자를 더한 결과를 출력하는 프로그램을 작성해 보세요.

function getNumbers() {
    return new Promise((resolve, reject) => {
      const num1 = parseInt(prompt('number 1?'));
      const num2 = parseInt(prompt('number 2?'));
  
      if (isNaN(num1) || isNaN(num2)) {
        reject(new Error('올바른 숫자를 입력하세요.'));
      } else {
        resolve({ num1, num2 });
      }
    });
  }
  
  function addNumbers(a, b) {
    return a + b;
  }
  
  // getNumbers 함수를 호출하고 결과를 출력
  getNumbers()
    .then(({ num1, num2 }) => {
      const result = addNumbers(num1, num2);
      console.log('두 숫자의 합:', result);
    })
    .catch(error => {
      console.error('에러:', error.message);
    });
  