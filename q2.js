const printItemsSlowly = async arr => {
  const waitXSeconds = (item, secs) => {
    return new Promise(resolve =>
      setTimeout(() => resolve(item), secs * 1000)
    ).then(item => console.log(item));
  };

  let secs = 1;
  const promises = [];
  arr.forEach(item => {
    promises.push(waitXSeconds(item, secs));
    secs *= 2;
  });

  Promise.all(promises).then(() => console.log("all tasks finished"));
};

printItemsSlowly(["a", "b", "c", "d"]);
