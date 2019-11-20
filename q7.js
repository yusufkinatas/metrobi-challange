const getMaxValue = (carrotTypes, capacity) => {
  carrotTypes.sort((c1, c2) => c1.kg - c2.kg);
  const minCarrotWeigth = carrotTypes[0].kg;

  carrotTypes.forEach(carrot => (carrot.unitPrice = carrot.price / carrot.kg));
  carrotTypes.sort((c1, c2) => c2.unitPrice - c1.unitPrice);

  let value = 0;

  let i = 0;
  while (minCarrotWeigth <= capacity && i < carrotTypes.length) {
    let { kg, price } = carrotTypes[i];

    if (kg <= capacity) {
      let carrotCount = Math.floor(capacity / kg);
      capacity -= carrotCount * kg;
      value += carrotCount * price;
    }

    i++;
  }

  return value;
};

const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 }
];

const capacity = 36;

console.log(`Max value: ${getMaxValue(carrotTypes, capacity)}`);
