let softwareHouses = ["TechSoft", "CodeWorks", "DevHouse", "SoftSolutions", "AlphaApps"];
console.log("Initial array:", softwareHouses);

softwareHouses.shift();
console.log("After removing first:", softwareHouses);

let midIndex = Math.floor(softwareHouses.length / 2);
softwareHouses[midIndex] = "NewWave";

softwareHouses.push("NextGen Labs");
console.log("Final array:", softwareHouses);
