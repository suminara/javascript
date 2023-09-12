// Promise를 생성하고, 해당 Promise가 이행(resolve)되었을 때 "Promise 이행됨!"을 출력하는 코드를 작성하세요.

let robot1 = new Promise((resolve,rejected)=>resolve('Promise 이행됨!'))



//프로미스 API
// 두 Promise가 모두 이행(resolve)되었을 때 두 결과를 조합하여 "두 Promise가 모두 이행됨!"을 출력하는 코드를 작성하세요.

function fetchFirstData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "First data fetched!";
        resolve(data);
      }, 2000);
    });
  }
  
  function fetchSecondData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = "Second data fetched!";
        resolve(data);
      }, 1500);
    });
  }
  
  // 여기에 코드를 작성하여 두 Promise가 모두 이행됐을 때 "두 Promise가 모두 이행됨!"을 출력하세요.
  Promise.all([fetchFirstData(),fetchSecondData()]).then(() => {
	console.log('두 Promise가 모두 이행됨!')
});