// fetch API는 Response 객체를 Resolving하는 Promise를 반환합니다.
// Response의 body 값에 접근하는 방법은 Response.json() 입니다.
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

async function fetchAndPrintJson(url) {
  // 매개변수로 받은 url 주소의 데이터를 fetch 받아와서 출력하는 함수를 작성하세요.
  const response = await fetch(url);
  // return console.log(resposne.json());           await을 붙여줘야 fulfil(이행 상태로 됨)
  const jsonData = await response.json(); //.json이 비동기 함수 이다.
  return console.log(jsonData);
}

fetchAndPrintJson("https://jsonplaceholder.typicode.com/posts/1");
/*
출력 결과:
{
"userId": 1,
"id": 1,
"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/
