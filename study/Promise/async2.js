// 아래의 주소로 HTTP GET 요청을 보내는 함수를 작성하세요.
// 요청이 성공하면 응답 데이터를 반환하고, 실패하면 오류 메시지를 반환해야 합니다.
function fetchData(url) {
    // fetch API 또는 XMLHttpRequest를 사용하여 구현하세요.
    return fetch(url)
  }
  

  async function main() {
    try {
      // fetchData 함수를 사용하여 'https://api.example.com/data' 주소로 GET 요청을 보내고 응답 데이터를 출력하세요.
      const response = await fetchData('https://api.example.com/data');
      console.log('응답 데이터:', response);
    } catch (error) {
      // 오류가 발생한 경우 오류 메시지를 출력하세요.
      console.error('오류:', error);
    }
  }
  
  main();