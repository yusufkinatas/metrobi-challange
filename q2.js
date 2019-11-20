const printItemsSlowly = async arr => {
  let seconds = 1;
  for (let i = 0; i < arr.length; i++) {
    // console.log(`waiting ${seconds} seconds`);
    setTimeout(() => {
      console.log(arr[i]);
    }, seconds * 1000);
    seconds *= 2;
  }
};

printItemsSlowly(["a", "b", "c", "d"]);

// const printItemsSlowly = async arr => {
//   const waitXSeconds = secs => {
//     return new Promise(resolve => setTimeout(resolve, secs * 1000));
//   };

//   let seconds = 1;
//   for (let i = 0; i < arr.length; i++) {
//     console.log(`waiting ${seconds} seconds`);
//     await waitXSeconds(seconds);
//     console.log(arr[i]);
//     seconds *= 2;
//   }
// };

// printItemsSlowly(["a", "b", "c", "d"]);
