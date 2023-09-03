// 배열(arr) 내의 최대값을 찾아 반환하는 함수를 작성하세요.
// apply 메서드를 사용하여 배열을 전달하도록 합니다.


function findMaxValue(arr) {
    return Math.max.apply(null,arr)
}

const numbers = [3, 8, 1, 9, 4];
findMaxValue(numbers);
