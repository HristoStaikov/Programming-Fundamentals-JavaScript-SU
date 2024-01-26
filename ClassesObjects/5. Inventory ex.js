function solve(arr) {
  let sortArr = [];

  arr.forEach((element) => {
    let [hero, level, item] = element.split("/");

    let newObj = {
      Hero: hero,
      level: Number(level),
      item: item,
    };
    sortArr.push(newObj);
    sortArr.sort((a, b) => a.level - b.level);
  });
  sortArr.forEach((element) => {
    console.log(`Hero: ${element.Hero}`);
    console.log(`level => ${element.level}`);
    console.log(`items =>${element.item}`);
  });
}
solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
