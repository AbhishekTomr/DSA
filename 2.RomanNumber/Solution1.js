const romanToInt = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const toInteger = (romanNum) => {
  let intNum = 0;
  const romanArray = romanNum.split("");
  let skipTerm = false;
  romanArray.forEach((char, i) => {
    if (skipTerm) return (skipTerm = false);

    switch (char) {
      case "I": {
        if (romanArray[i + 1] === "V") {
          intNum += 4;
          skipTerm = true;
        }
        if (romanArray[i + 1] === "X") {
          intNum += 9;
          skipTerm = true;
        }
        break;
      }
      case "X": {
        if (romanArray[i + 1] === "L") {
          intNum += 40;
          skipTerm = true;
        }
        if (romanArray[i + 1] === "C") {
          intNum += 90;
          skipTerm = true;
        }
        break;
      }
      case "C": {
        if (romanArray[i + 1] === "D") {
          intNum += 400;
          skipTerm = true;
        }
        if (romanArray[i + 1] === "M") {
          intNum += 900;
          skipTerm = true;
        }
        break;
      }
    }
    if (skipTerm === false) {
      intNum += romanToInt[char];
    }
  });
  console.log("intNum", intNum);
  return intNum;
};

toInteger("MCMXCIV");
