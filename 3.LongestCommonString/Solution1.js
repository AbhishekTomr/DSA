var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  const comparisionString = strs.pop();
  let numberOfIterations = 0;
  let stopComparision = false;
  for (let i = 0; i < comparisionString.length; i++) {
    if (stopComparision) break;
    strs.forEach((item) => {
      numberOfIterations++;
      if (item[i] !== comparisionString[i]) {
        stopComparision = true;
      }
    });
    if (!stopComparision) commonPrefix += comparisionString[i];
  }
  return commonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
