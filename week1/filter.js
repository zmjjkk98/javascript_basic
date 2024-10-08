// 아래 결과와 같이 출력되도록 함수를 완성해 보세요.

function getEvenNumbers(arr) {
  // 인자로 받은 숫자를 요소를 갖는 배열에서 짝수만 필터하여 배열로 반환하세요.
  // 배열의 filter 메소드를 이용하세요.
  // 여기에 코드를 작성하세요.
  return arr.filter((e) => e % 2 === 0);
}

const result = getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(result); // [2,4,6,8,10]
