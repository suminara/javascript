// 문제: 주어진 시간(ms)이 지난 후에 "Hello, World!"를 출력하는 함수를 작성하세요.

// 다음과 같은 조건을 만족해야 합니다.

// 함수 delayedHello(ms)는 밀리초(ms) 단위의 시간을 인수로 받습니다.
// 함수는 주어진 시간(ms)이 지난 후에 "Hello, World!"를 콘솔에 출력해야 합니다.

delayedHello(2000); // 2초(2000ms) 후에 "Hello, World!"가 출력되어야 합니다.


function delayedHello(sec){
  return new Promise ((res)=>{
    setTimeout(()=>{
      res("Hello, World!")}, sec)
  })
}
delayedHello(1000).then((res)=>{console.log(res)})

