// 문제: 배열 조작과 Splice() 활용

// 당신은 배열을 다루는 로봇을 프로그래밍해야 합니다. 이 로봇은 배열에서 숫자를 추출하고, 해당 숫자와 동일한 값을 가진 원소들을 배열에서 모두 제거합니다. 단, 추출한 숫자도 배열에서 제거해야 합니다. 이 로봇을 구현하기 위해 splice() 메소드를 사용하세요.

// 아래는 예시입니다:

// 초기 배열: [3, 2, 3, 1, 3, 4, 3]
// 추출한 숫자: 3
// 추출한 숫자와 동일한 값인 원소들을 모두 제거하면서 추출한 숫자도 배열에서 제거한 결과: [2, 1, 4]
// 위와 같은 동작을 하는 removeAndExtract(arr, num) 함수를 작성하세요. 함수는 배열 arr과 추출할 숫자 num을 인자로 받아, 동작을 수행한 후 결과 배열을 반환해야 합니다.

const arr = [3, 2, 3, 1, 3, 4, 3]
const num = 3


function removeAndExtract(arr, num) {
    const n = arr.length;
    for (let i=0; i<n; i++) {
        if (arr[i] === num) {
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}

console.log(removeAndExtract(arr, num))

