const str = "Hello World";

function reverseOrder(str) {
  str = str.split(" ").reverse().join(" ");
  return str;
}

console.log(reverseOrder(str));
