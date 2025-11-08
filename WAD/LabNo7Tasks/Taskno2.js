let numbers=[25,10,2,77,702,99,4008,1];
let max=numbers[0];
let min=numbers[0];

for (let num of numbers)
    {
        if (num>max)
            {
               max=num;
        }
        if (num<min)
            {
               min=num;
        }
}

console.log ("Maximum Number:", max);
console.log ("Minimum Number:", min);