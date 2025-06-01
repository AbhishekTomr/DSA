const charMapper = {};

var lengthOfLongestSubstring = function (s) {
  if (!s.length) return 0;
  let start = 0;
  let end = 0;
  let count = 0;
  while (end < s.length) {
    let character = s[end];
    if (charMapper[character] !== undefined && charMapper[character] >= start) {
      start = end;
    }
    charMapper[character] = end;
    end++;
    count = Math.max(end - start, count);
  }
  count = Math.max(end - start, count);
  return count;
};

console.log(lengthOfLongestSubstring("bwf"));
