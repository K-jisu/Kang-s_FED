// 문제 1: 다중 API 호출 후 결과 병합하기
// 문제: 여러 개의 API를 동시에 호출하여 각 API의 응답을 받은 후, 모든 응답을 하나의 배열에 담아 반환하는 함수를 작성하세요.
// 힌트: Promise.all()을 활용하여 여러 Promise를 동시에 처리할 수 있습니다.

async function fetchMultipleAPIs() {
  // 여러 개의 API를 호출하는 함수들을 정의합니다.
  const api1 = fetch('https://api.example.com/data1');
  const api2 = fetch('https://api.example.com/data2');
  const api3 = fetch('https://api.example.com/data3');

  // Promise.all()을 사용하여 모든 Promise가 resolved될 때까지 기다립니다.
  const responses = await Promise.all([api1, api2, api3]);

  // 각 응답의 JSON 데이터를 추출합니다.
  const data = await Promise.all(responses.map(res => res.json()));

  return data;
}


// 문제 2: 에러 처리하기
// 문제: API 호출 중 에러가 발생할 경우, 에러 메시지를 출력하고 프로그램이 종료되지 않도록 하는 함수를 작성하세요.
// 힌트: try...catch 블록을 사용하여 에러를 처리할 수 있습니다.

async function fetchDataWithErrorHandling() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// 문제 3: 타임아웃 처리하기
// 문제: 특정 작업이 일정 시간 내에 완료되지 않으면 에러를 발생시키는 함수를 작성하세요.
// 힌트: Promise.race()와 setTimeout()을 조합하여 구현할 수 있습니다

async function fetchDataWithTimeout(timeout) {
  const promise = fetch('https://api.example.com/data');
  const timeoutPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Timeout'));
    }, timeout);
  });

  return Promise.race([promise, timeoutPromise]);
}