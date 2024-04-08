function solve(input) {

  let materials = input.split(" ");

  let keyMaterials = {
    Shadowmourne: { material: "shards", quantity: 0 },
    Valanyr: { material: "fragments", quantity: 0 },
    Dragonwrath: { material: "motes", quantity: 0 },
  };

  let junk = [];

  for (let index = 0; index < materials.length; index += 2) {
    const currentQuantity = +materials[index];
    const currentMaterial = materials[index + 1].toLowerCase();

    if (keyMaterials["Shadowmourne"].material === currentMaterial) {

      if (keyMaterials["Shadowmourne"].quantity + currentQuantity < 250) {
        keyMaterials["Shadowmourne"].quantity += currentQuantity;
      } else {

        console.log("Shadowmourne obtained!");
        let difference = (currentQuantity + keyMaterials["Shadowmourne"].quantity) - 250;
        keyMaterials["Shadowmourne"].quantity = difference;
        break;
      }
    } else if (keyMaterials["Valanyr"].material === currentMaterial) {

      if (keyMaterials["Valanyr"].quantity + currentQuantity < 250) {
        keyMaterials["Valanyr"].quantity += currentQuantity;
      } else {

        console.log("Valanyr obtained!");
        let difference = (currentQuantity + keyMaterials["Valanyr"].quantity) - 250;
        keyMaterials["Valanyr"].quantity = difference;
        break;
      }
    } else if (keyMaterials["Dragonwrath"].material === currentMaterial) {

      if (keyMaterials["Dragonwrath"].quantity + currentQuantity < 250) {
        keyMaterials["Dragonwrath"].quantity += currentQuantity;
      } else {

        console.log("Dragonwrath obtained!");
        let difference = (currentQuantity + keyMaterials["Dragonwrath"].quantity) - 250;
        keyMaterials["Dragonwrath"].quantity = difference;
        break;
      }
    } else {

      let checkOfJunk = junk.find((x) => x.material === currentMaterial);
      if (checkOfJunk) {
        checkOfJunk.quantity += currentQuantity;
      } else {
        junk.push({ material: currentMaterial, quantity: currentQuantity });
      }
    }

  }

  Object.values(keyMaterials)
    .sort((a, b) => b.quantity - a.quantity || a.material.localeCompare(b.material))
    .forEach((element) => {console.log(`${element.material}: ${element.quantity}`);});

  if (junk.length !== 0) {
    junk
      .sort((a, b) => a.material.localeCompare(b.material))
      .forEach((el) => console.log(`${el.material}: ${el.quantity}`));
  }
}
solve("123 silver 6 shards 8 shards 123 silver 9 fangs 250 MOTES 8 Shards 86 Motes 7 stones 19 silver 10 Motes");


