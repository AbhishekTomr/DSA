const sumOf = (number) => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  console.log("number", number, "sum", sum);
  return sum;
};

sumOf(2);
sumOf(3);
sumOf(4);
sumOf(5);
