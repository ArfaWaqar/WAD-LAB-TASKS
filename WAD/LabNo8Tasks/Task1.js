const prompt=require("prompt-sync")();
function findLargest(a,b,c){
    if (a>b && a>c){
        console.log("First Number is the largest");    
    }
    else if(b>a && b>c){
        console.log("Second Number is the largest");
    }
    else{
        console.log("Third Number is the largest");
    }
}

let a= parseFloat(prompt("Enter First Number: "));
let b= parseFloat(prompt("Enter Second Number: "));
let c= parseFloat(prompt("Enter third Number: "));

findLargest(a,b,c);