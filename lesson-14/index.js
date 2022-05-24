let number = 0;

function add(num) {
  return (number = number + num);
}

function decrease(num) {
  return (number = num - number);
}

function reset(num) {
  return (number = 0);
}
function getMemo(num) {
  return (number = num);
}

console.log(add(4));
console.log(decrease(2));
console.log(reset(0));
console.log(getMemo(5));
