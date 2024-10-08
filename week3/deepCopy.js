// 아래 결과와 같이 나오도록 아래 함수를 완성해 보세요.

function deepCopy(obj) {
  // 모든 depth 까지 재귀적으로 탐색하여 복사한 객체를 return 하세요.
  // for in 문과 typeof 키워드를 이용해 보세요.
  console.log(obj);
  console.log("----------------------");
  const clonedObj = {};
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      clonedObj[key] = deepCopy(obj[key]);
    } else {
      clonedObj[key] = obj[key];
    }
  }
  return clonedObj;
}

const obj = {
  name: "John",
  age: 30,
  address: {
    city: "Seoul",
    country: "South Korea",
    details: ["도로명주소", "지번주소"],
  },
};

//Json 이용하는 방법
//라이브러리를 이용하는 방법

const deepCopied = deepCopy(obj);
console.log(obj === deepCopied); // false
console.log(obj.age === deepCopied.age); // true
console.log(obj.address === deepCopied.address); // false
console.log(obj.address.city === deepCopied.address.city); // true
console.log(obj.address.details === deepCopied.address.details); // false
console.log(deepCopied);
