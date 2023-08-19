//주사위를 총 5번 던집니다.
//각 던진 주사위의 숫자를 랜덤하게 생성합니다 (1부터 6 사이의 정수).
//각 던진 주사위의 숫자를 출력합니다.
//모든 숫자를 더한 총합을 출력합니다.


const cincoDice = [];

for (let i=0;i<6;i++) {
    let dice = parseInt(Math.random()*6+1);
    cincoDice.push(dice);
}

console.log(cincoDice);

let sum = 0;

for (let i = 0; i < cincoDice.length; i++) {
    sum += cincoDice[i];
}

console.log(sum)