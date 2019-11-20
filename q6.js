const achillesSpeed = 20;
const tortoiseSpeed = 10;

var achillesPos = 0;
var tortoisePos = 50;

const wait = () => new Promise(resolve => setTimeout(resolve, 250));

const demonstrateParadox = async () => {
  while (tortoisePos > achillesPos) {
    let gap = tortoisePos - achillesPos;

    let timeNeededForAchilles = gap / achillesSpeed;

    achillesPos = tortoisePos;
    tortoisePos += timeNeededForAchilles * tortoiseSpeed;

    console.log(
      `Achilles new position: ${achillesPos}\nTortoise new position: ${tortoisePos}\n`
    );
    await wait();
  }
  console.log(
    "Number type cannot more precise on javascript. Demonstration finished."
  );
};

demonstrateParadox();
