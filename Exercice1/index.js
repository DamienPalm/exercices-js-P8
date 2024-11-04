//votre code ici
function pairNumbers(a, b) {
  let numbers = [];
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      numbers.push(i);
    }
  }
  return numbers.join(",");
}

console.log(pairNumbers(1, 10));

export default pairNumbers;
