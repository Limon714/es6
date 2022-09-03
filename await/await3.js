async function hum() {
  console.log("2 message");
  const res = await fetch("ES6/await/await.json");
  const std = await res.json();
  console.log("4 message");

  return std;
}

console.log("1 message");
let a = hum();
console.log("5 message");
console.log(a);
