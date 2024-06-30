let charMap = {};

var lengthOfLongestSubstring = function (s) {
  const subStrings = [];
  let str = "";
  for (let i = 0; i < s.length; i++) {
    if (!charMap[s[i]]) {
      charMap[s[i]] = 1;
      str += s[i];
    } else {
      subStrings.push(str);
      charMap = {
        [s[i]]: 1,
      };
      str = s[i];
    }
  }
  subStrings.push(str);
  let maxSub = subStrings[0];
  subStrings.forEach((item, index) => {
    if (item.length > maxSub.length) {
      maxSub = item;
    }
  });
  console.log("subStrings", subStrings);
  return maxSub.length;
};

console.log(lengthOfLongestSubstring("dvdf"));
