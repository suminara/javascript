// 주어진 배열(array)에서 중복된 요소들을 찾아 배열 형태로 반환합니다.
// 반환된 배열은 중복을 제외한 상태로 정렬되어 있어야 합니다.

const arr = [3, 1, 4, 2, 1, 5, 4, 5];

//중복된 요소로 이루어진 배열을 반환
const dupl = arr.filter((item, index) => arr.indexOf(item) !== index);
//arr 에서 중복 빼기
const pureArr = arr.filter(i => !dupl.includes(i))

console.log(dupl);
console.log(pureArr)
