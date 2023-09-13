// 아래 함수는 1초 후에 주어진 숫자에 2를 곱한 결과를 반환합니다.
function doubleAfter1Second(number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(number * 2);
      }, 1000);
    });
  }
  
  // 아래 함수는 두 개의 숫자를 받아 곱한 후 결과를 반환합니다.
  async function multiplyNumbers(x, y) {
    const resultX = await doubleAfter1Second(x);
    const resultY = await doubleAfter1Second(y);
    return resultX * resultY;
  }
  
  // 위의 함수를 호출하고 결과를 출력하는 코드를 작성하세요.
  async function main() {
    try {
      const result = await multiplyNumbers(3, 4);
      console.log("결과:", result);
    } catch (error) {
      console.error("오류 발생:", error);
    }
  }
  
  main();
  