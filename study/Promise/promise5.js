// 문제: 다음과 같은 요구사항을 충족하는 자바스크립트 프로그램을 작성하세요.

// getUserData 함수를 작성하세요. 이 함수는 1초 후에 프로미스를 이행(resolve)하여 다음 객체를 반환해야 합니다.

// {
//     username: "jsUser",
//     email: "jsuser@example.com"
//   }

// displayUserData 함수를 작성하세요. 이 함수는 getUserData 함수를 호출하고, 그 결과를 콘솔에 출력해야 합니다.

// displayUserData 함수를 호출하세요.

// 이 문제를 해결하기 위해 getUserData 함수를 사용하여 프로미스를 생성하고, .then()을 사용하여 프로미스가 이행될 때 결과를 출력하는 displayUserData 함수를 호출하세요.

function getUserData () {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const userData = {username: "jsUser",
            email: "jsuser@example.com"};
            resolve(userData);
        },1000)
    })
}

function displayUserData() {
    getUserData()
      .then(data => {
        console.log(data); // 결과를 콘솔에 출력합니다.
      })
      .catch(error => {
        console.error(error);
      });
  }

displayUserData();