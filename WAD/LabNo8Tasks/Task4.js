const marks=[35,60,75,25,69];

const passedMarks=marks.filter(function(mark){
    return mark>50;
});

console.log("All marks:",marks);
console.log("Marks greater than 50 are:",passedMarks);
