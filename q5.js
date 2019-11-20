const calculateWorstCaseDropCount = n => 100 / n + n - 1;

let floorIncrementAfterDrop = 1;
let minWorstCaseDropCount = calculateWorstCaseDropCount(1);
let continueLoop;

do {
  continueLoop = false;
  floorIncrementAfterDrop++;

  let currentDropCount = calculateWorstCaseDropCount(floorIncrementAfterDrop);

  if (currentDropCount < minWorstCaseDropCount) {
    continueLoop = true;
    minWorstCaseDropCount = currentDropCount;
  }
} while (continueLoop);

console.log(
  `best floor increment after drop: ${floorIncrementAfterDrop -
    1}\nworst case drop count: ${minWorstCaseDropCount}`
);
