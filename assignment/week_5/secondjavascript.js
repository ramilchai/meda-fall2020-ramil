// Datatypes

"strings"
1000;
false;

var someVariable = 100;
var isItRaining = false;

if (someVariable > 10) {
    console.log("This number is higher than 10,");

    if (someVariable < 1000) {
        console.log("This number is lower than 1000.");
    }

} else {
    console.log("This number is lower than 10.");
}

if (isItRaining == true) {
    console.log("Bring an umbrella");
}

// Functions and Arguments
function addExclamation(msg, num=4) {
    console.log(msg, "!!!");
    console.log(num * 2);
}
 addExclamation("Hey", 6);
 addExclamation("I love you", 8);

 // Concatenation (combining texts)
var completeSentence = "My name is" + " Ramil";
console.log(completeSentence);

console.log("100" + 100);

//NaN appear when trying to multiple a sring with number

function maxFunction (a, b, c) {
    let ans = 0
    if ((a >= b) & (a >= c))  {
        ans = a;
    } else if ((b >= a) & (b >= c)) {
        ans = b;
    } else {
        ans = c;
    }
    return ans;
}
var testFunc1 = maxFunction(1,2,3);
var testFunc2 = maxFunction(100,20,35);

console.log(testFunc1);
console.log(testFunc2);


function maxFunctionUnlimited (...restArgs) {
    let ans = 0;
    for (let i = 0; i < restArgs.length; i++) {
        if (ans <= restArgs[i]) {
            ans = restArgs[i];
        } else {
            continue;
        }
    }
    return ans
}

var testFunc3 = maxFunctionUnlimited(1000,24,366,488,54);
console.log(testFunc3);