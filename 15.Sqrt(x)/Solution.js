var mySqrt = function (x) {
  const nums = x.toString().split("");
  let pair = null;
  const pairNums = [];
  while (nums.length) {
    const digit = parseInt(nums.pop());
    if (pair !== null) {
      pair = digit * 10 + pair;
      pairNums.unshift(pair);
      pair = null;
    } else {
      pair = digit;
    }
  }
  if (pair !== null) {
    pairNums.unshift(pair);
  }
  console.log("array after pairing", pairNums);
  let divisor = 0;
  let sum = 0;
  let divident = [];
  pairNums.forEach((num, index) => {
    sum = sum * 100 + num;
    console.log("initial sum", sum);
    //for first time
    let closest = 1;
    //find the the lest sq root
    for (let i = 1; i < 10; i++) {
      if (index === 0) {
        if (i * i <= sum) {
          closest = i;
        }
      } else {
        if ((divisor * 10 + i) * i <= sum) {
          closest = i;
        }
      }
    }
    divident.push(closest);
    divisor = divisor * 10 + closest;
    sum = sum - divisor * closest;
    divisor = divisor + closest;
    console.log("sum", sum);
    console.log("divisor", divisor);
    console.log("divident", divident);
  });

  console.log(divident);
};

//235
mySqrt(1024);
