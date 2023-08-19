//문제:
//문자열을 대문자로 변환하고, 변환된 결과를 새로운 변수 upperStr 에 저장.
//변환된 문자열에서 특정 패턴의 출현 횟수를 찾아 반환하는 함수만들기.


const str = 'You are the sum total of everything youve ever seen, heard, eaten, smelled, been told, forgot - its all there. Everything influences each of us, and because of that I try to make sure that my experiences are positive.'

const upperStr = str.toUpperCase();
const pattern = 'E'

function countPattern(upperStr, pattern) {
    let filtered = upperStr.split('').filter(
        function(item) {
            return item === pattern;
        }//필터 메소드안에는 함수만 들어갈 수 있다! 값이 true인 아이들만.
    );
    return filtered.length
}

let result =  countPattern(upperStr, pattern)
    console.log(result);
//단어를 찾을수가 엄슴
//' '로 나누면 공백포함 못찾음

const pattern2 = 'YOU'

function countPattern2(upperStr, pattern2) {
    let index = upperStr.indexOf(pattern2);
    let count = 0; //꼭 필요한건 아님. 그러나 꼭 필요한 습관
    while (index !== -1) {
        count++;
        index = upperStr.indexOf(pattern2, index + 1); //조건이 언제나 참이기 때문에 종료를 해줘야함
    }
    return count
}

let result2 = countPattern2(upperStr, pattern2)
console.log(result2)

//활용 : .toUpperCase() .split('') .length .filter() .indexOf()

//문자열에 쓸수 있는 메소드들은 모두 비파괴적 메소드. 원본을 훼손하지 않는 방향. (예외를 못찾겠음... 없는듯)
//    연산자(+-*/%) 등

//배열,객체의 메소드들은 거의 파괴적 메소드
//메모리를 아끼기 위해서임
//    .push() 등
//그러나 예외도 있다
//    Object.assign() 객체 메소드면서 비파괴적.
