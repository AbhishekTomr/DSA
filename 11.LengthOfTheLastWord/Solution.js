var lengthOfLastWord = function (s) {
  let index = s.length - 1;
  let flag = true;
  while (flag) {
    if (s[index] === " ") {
      index--;
    } else {
      flag = false;
    }
  }
  return s
    .slice(0, index + 1)
    .split(" ")
    .pop().length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
