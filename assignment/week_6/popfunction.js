var test = [1,2,3,4,5];


function pop(cutting) {
    if (cutting.length > 0) {
        var ans = cutting[cutting.length - 1];
        cutting.length = cutting.length - 1;
        return ans;
    } else {
        console.log("Hey, your array is empty");
        return null;
    }
}

console.log(pop(test));
console.log(test);

console.log(pop(test));
console.log(test);

console.log(pop(test));
console.log(test);

console.log(pop(test));
console.log(test);

console.log(pop(test));
console.log(test);

console.log(pop(test));
console.log(test);

