var longestPalindrome = function (s) {
  let longestString = "";
  let charCount = {};
  let current = "";
  let i = 0;
  let j = 0;
  let pivot = 0;
  while (i < s.length) {
    if (s[i] == s[i + 1]) pivot = 1;
    else pivot = 0;
    if (s[i - j] == s[i + j + pivot] && i - j >= 0 && i + j < s.length) {
      current = s.slice(i - j, i + j + 1 + pivot);
      charCount[s[i - j]] = true;
      j++;
    } else {
      if (
        pivot === 1 &&
        current.length &&
        Object.keys(charCount).length === 1 &&
        (charCount[s[i - j]] || charCount[s[i + j + pivot]])
      ) {
        current = current + Object.keys(charCount)[0];
      }
      charCount = {};
      i++;
      j = 0;
    }
    if (current.length >= longestString.length) {
      longestString = current;
    }
  }
  return longestString;
};

console.log(longestPalindrome("caaaaa"));
