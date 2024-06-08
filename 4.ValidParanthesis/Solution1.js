var isValid = function (s) {
  const bracketCounter = [];
  const stringArray = s.split("");
  const counter = 0;
  let validParams = true;
  stringArray.forEach((str, index) => {
    switch (str) {
      case "(": {
      }
      case "[": {
      }
      case "{": {
        bracketCounter.push(str);
        counter++;
        break;
      }
      case ")": {
        let element = bracketCounter.pop();
        if (element !== "(") validParams = false;
        counter--;
        break;
      }
      case "]": {
        let element = bracketCounter.pop();
        if (element !== "[") validParams = false;
        counter--;
        break;
      }
      case "}": {
        let element = bracketCounter.pop();
        if (element !== "{") validParams = false;
        counter--;
        break;
      }
    }
  });
  return validParams && counter === 0;
};

let openParams = isValid("{[]}");
console.log("openParams", openParams);
