async function hum() {
  console.log("2 message");
  await console.log("3 message");
  console.log("4 message");
}

console.log("1 message");
hum();
console.log("5 message");
