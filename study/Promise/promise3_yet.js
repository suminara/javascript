// 문제: 주어진 함수 fetchData는 데이터를 비동기적으로 불러오는 Promise를 반환합니다. 이 함수를 사용하여 3개의 다른 데이터를 불러온 후, 이 데이터들을 조합하여 새로운 데이터를 생성하는 코드를 작성하세요. 새로운 데이터 생성에 성공하면 "데이터 생성 완료!"를 출력하세요.

// 위의 fetchData 함수는 주어진 dataId를 가지고 데이터를 불러오는 Promise를 생성합니다. 이 함수를 활용하여 3개의 다른 데이터를 비동기적으로 불러와서 이 데이터들을 조합하여 새로운 데이터를 생성하는 코드를 작성해보세요. 모든 데이터를 성공적으로 조합하면 "데이터 생성 완료!"를 출력하세요.

function fetchData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = `Data ${dataId}`;
      resolve(data);
    }, Math.random() * 2000);
  });
}

// 여기에 코드를 작성하세요.
Promise.all([fetchData(1), fetchData(2), fetchData(3)])
  .then((results) => {
    // 데이터를 조합하여 새로운 데이터 생성
    const combinedData = results.join(', ');
    console.log(`데이터 생성 완료: ${combinedData}`);
  })
  .catch((error) => {
    console.error('에러 발생: ' + error);
  });