function simulatePromise(isFulfilled) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (isFulfilled) {
          resolve("Promise 이행됨!");
        } else {
          reject("에러 발생!");
        }
      }, 2000);
    });
  }
  
  simulatePromise(true)
  .then((result) => {
    console.log(result); // "Promise 이행됨!"
  })
  .catch((error) => {
    console.error(error);
  });