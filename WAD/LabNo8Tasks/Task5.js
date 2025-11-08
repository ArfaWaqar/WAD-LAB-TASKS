const prompt = require("prompt-sync")();
let n = parseInt(prompt("Enter how many numbers you want in the array:"));
let arr = [];
for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt("Enter Number" + (i + 1) + ":"));
    arr.push(num);
}

console.log("Your array is:" + arr);
