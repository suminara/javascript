var fruitArray = ["banana", "orange", "apple"];
//바나나빼기

const arr =fruitArray.filter(i => i !== "banana")

console.log(arr)



// 정수 배열 numbers가 매개변수로 주어집니다. 
// numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

const numbers = [1, 2, 100, -99, 1, 2, 3]

function solution () {
    return numbers.map(i => i*2)
}

// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function solution (){
    return numbers.reduce((a,c) => a+c ,0)/numbers.length;
}
solution ()