var weekdays = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

var months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
];

console.log(weekdays, months);

var emptyArray = [];
// if the index doesn't exist, it shows: undefined 

// Array Methods 

// Array Push -- add "argument" to the last array
emptyArray.push("this is the first item!");

emptyArray.push(5500);

emptyArray.push(false);

console.log(emptyArray);

// Array Pop -- remove last array -- take no argument

emptyArray.pop();
emptyArray.pop();
emptyArray.pop();

console.log(emptyArray);

// Array Unshift -- add "argument" to the beginning of array

weekdays.unshift("superday");
console.log(weekdays);

// Array Shift -- remove the beginning -- take no argument

weekdays.shift();
console.log(weekdays);


// Array ForEach -- provide every array to argument of the function

weekdays.forEach(function(weekday) {
    console.log(weekday);
});

// Loops and Arrays

var setOfNumbers = [1, 10, 100, 1000, 10000];

for (var i = 0; i < setOfNumbers.length; i++) {
    var product = setOfNumbers[i] * 6;
    console.log(product);
}

// Array within Array AKA multidimemsional array.
var masterArray = [
    [10, 29],
    [14, 20],
    [50, 12]
];

masterArray[1].length;
masterArray[2][0]; // Expect number 50

