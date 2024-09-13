let washingMachine = {
  name: "washing machine",
  category: "household appliances",
  price: 25000,
  currency: "UAH",
  inUse: true,
};

let vacuumСleaner = {
  name: "vacuum cleaner",
  category: "household appliances",
  price: 5000,
  currency: "UAH",
  inUse: true,
};

let dishwasher = {
  name: "dishwasher",
  category: "household appliances",
  price: 23000,
  currency: "UAH",
  inUse: false,
};

let coffeeMaker = {
  name: "coffeeMaker",
  category: "household appliances",
  price: 8000,
  currency: "UAH",
  inUse: false,
};

let fridge = {
  name: "fridge",
  category: "household appliances",
  price: 10000,
  currency: "UAH",
  inUse: true,
};

let multicooker = {
  name: "multicooker",
  category: "household appliances",
  price: 3500,
  currency: "UAH",
  inUse: false,
};

let householdItems = [
  washingMachine,
  vacuumСleaner,
  dishwasher,
  coffeeMaker,
  fridge,
  multicooker,
];

console.log("--ALL Items--");
console.log("--How smart is your home?--");
for (let i = 0; i < householdItems.length; i++) {
  console.log(i);
  for (const [key, value] of Object.entries(householdItems[i])) {
    console.log(`${key}: ${value}`);
  }
}

console.log("-------------------------------------------");
console.log("---What appliances are you using now?---");
for (let i = 0; i < householdItems.length; i++) {
  let item = householdItems[i];

  if (item.inUse === true) {
    console.log(`${i}: I am using now: ${item.name}`);
  }
}

console.log("---What appliances are you not using now?---");
for (let i = 0; i < householdItems.length; i++) {
  let item = householdItems[i];

  if (item.inUse === false) {
    console.log(`${i}: I am not using now: ${item.name}`);
  }
}

console.log("----------------the 2-nd option-----------");
console.log("---What appliances are you using now?---");
for (let i = 0; i < householdItems.length; i++) {
  if (householdItems[i].inUse === true) {
    console.log(`--------------------`);
    for (const [key, value] of Object.entries(householdItems[i])) {
      console.log(`${key}: ${value}`);
    }
  }
}

console.log("-------------------------------------------");
console.log("---Costs more than 10_000 hryvn.---");
for (let i = 0; i < householdItems.length; i++) {
  if (householdItems[i].price >= 10000) {
    console.log(`--------------------------`);
    for (const [key, value] of Object.entries(householdItems[i])) {
      console.log(`${key}: ${value}`);
    }
  }
}
