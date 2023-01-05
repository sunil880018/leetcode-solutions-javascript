let num = 5;
let obj = { value: 10 };

function changeValue(x, y) {
  x = 10;
  y.value = 20;
}

changeValue(num, obj);

console.log(num); // 5
console.log(obj.value); // 20
