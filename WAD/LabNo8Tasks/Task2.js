const prompt = require("prompt-sync")();
const toSeconds = (minutes) => minutes * 60;
let minutes = parseFloat(prompt("Enter minutes: "));
let Seconds= toSeconds(minutes);
console.log("Minutes after the conversion:",Seconds);
