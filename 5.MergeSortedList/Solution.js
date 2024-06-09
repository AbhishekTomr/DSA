var PushElements = (element1, element2, list) => {
  if (element1 === element2) return list.push(element1);
  if (element1) list.push(element1);
  if (element2) list.push(element2);
};

var mergeTwoLists = function (list1, list2) {
  const newList = [];
  const maxLength = list1.length > list2.length ? list1.length : list2.length;
  for (let i = 0; i < maxLength; i++) {
    if (list1[i] < list2[i]) {
      PushElements(list1[i], list2[i], newList);
    } else {
      PushElements(list2[i], list1[i], newList);
    }
  }
  return newList;
};

mergeTwoLists([1, 2, 4, 8], [1, 3, 6]);
