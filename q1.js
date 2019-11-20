const findDuplicates = arr => {
  let clone = [];
  let duplicates = [];

  arr.forEach(item => {
    if (clone.indexOf(item) == -1) {
      clone.push(item);
    } else if (duplicates.indexOf(item) == -1) {
      duplicates.push(item);
    }
  });
  return duplicates;
};

//this function works only with primitive types, no deep comparison
console.log(findDuplicates([1, 2, "yusuf", "mehmet", 8, 1, 9, "yusuf"]));
