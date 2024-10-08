// fetch API는 Response 객체를 Resolving하는 Promise를 반환합니다.
// Response의 body 값에 접근하는 방법은 Response.json() 입니다.
// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function fetchAndPrintJson(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));
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
