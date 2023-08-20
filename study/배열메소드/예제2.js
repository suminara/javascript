    // 객체들을 점수를 기준으로 내림차순으로 정렬하되,
    // 점수가 같은 경우 이름을 기준으로 오름차순 정렬하는 함수 작성

const inputArray = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 75 },
    { name: 'David', score: 92 },
    { name: 'Eva', score: 75 }
];


inputArray.sort((a, b) => b.score - a.score);//점수순 정렬

inputArray.sort((a, b) => (b.score - a.score) || a.name.localeCompare(b.name));