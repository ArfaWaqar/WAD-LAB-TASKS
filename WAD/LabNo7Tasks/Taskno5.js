const prompt = require("prompt-sync")();

function countVowels(str) {
    str = str.toLowerCase();
    let vowels = "aeiou";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}


let input = prompt("Enter a string: ");
console.log("Number of vowels:", countVowels(input));
