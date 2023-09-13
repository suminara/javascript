// delay 함수를 작성하고, main 함수에서 delay 함수를 호출하여 3초를 기다린 후에 "Hello, World!"를 출력하면 됩니다.

function delay(ms) {
    // ms 밀리초 동안 대기하는 Promise를 반환하는 함수를 작성하세요.
    return new Promise((resolve)=>{
        setTimeout(()=>{resolve()},ms)
    })
  }
  
  async function main() {
    // delay 함수를 사용하여 3초 동안 기다린 후에 "Hello, World!"를 출력하는 함수를 만드세요.
    // async/await을 사용하여 작성하세요.
    await delay(3000);
    console.log('Hello, World!');
  }
  
  main();
  