var climbStairs = function (n) {
  const fiboArray = [1, 0];
  for (let i = 0; i < n; i++) {
    const newNum = fiboArray[0] + fiboArray[1];
    fiboArray.pop();
    fiboArray.unshift(newNum);
    console.log("fibonacci", fiboArray);
  }
  return fiboArray[0];
};

climbStairs(2);
