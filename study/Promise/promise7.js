// 문제: 주어진 배열의 숫자를 모두 더하는 프로미스 함수를 작성하세요.

// 다음과 같은 조건을 만족해야 합니다.

// 함수 sumArray(numbers)는 숫자로 이루어진 배열을 인수로 받습니다.
// 함수는 배열에 포함된 모든 숫자를 비동기적으로 합산하고, 합산 결과를 반환하는 프로미스를 반환해야 합니다.
// 모든 숫자의 합산이 완료되면 프로미스가 이행(resolve)되어 합산된 결과를 반환해야 합니다.
// 예를 들어, 다음과 같이 사용되어야 합니다:

const numbers = [1, 2, 3, 4, 5];

function sumArray(arr){
    return new Promise((resolve)=>{
        resolve(arr.reduce((a,b)=>a+b))
    })
}

sumArray(numbers)
  .then(result => {
    console.log(result); // 15 (1 + 2 + 3 + 4 + 5)
  });
