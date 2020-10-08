var myObject = {
    firstName: "Joe",
    lastName: "Doe",
    address: "133 Main St.",
    age: 40,
    title: "Unemployed"
};




var myEmployees = [];







myEmployees.push(myObject);

var mySecondEmployee = {
    firstName: "James",
    lastName: "Bond",
    address: "123 Main St.",
    age: 32,
    title: "CEO"
};

var myThirdEmployee = {
    firstName: "Mary",
    lastName: "Trump",
    address: "8 Broad St.",
    age: 65,
    title: "Scientist"
};
// call the variable in object:
// 1. myObject.address
// 2. myObject["address"]

myEmployees.push(mySecondEmployee);
myEmployees.push(myThirdEmployee);

console.log(myEmployees);

var totalAges = 0;

for (var i = 0; i < myEmployees.length; i++) {
    totalAges = totalAges + myEmployees[i].age;
}

var avarageAge = totalAges / myEmployees.length;

console.log(avarageAge);

// Functions inside of Objects, Arrays, and Variables

var something = 100;

function someFunction() {
    console.log("I am a function!");
}

var storedFunction = someFunction;

storedFunction();

myEmployees.forEach(function(employee) {
    console.log("Hello! " + employee.firstName);
})

var testRunVarFunc = function(employee) {
    console.log("Hello! " + employee.firstName);
};

myEmployees.forEach(testRunVarFunc);

var specialObject = {
    doSomeWork: function() {
        console.log("working!");
    }
};

specialObject.doSomeWork();

// An Object's Property holds data (that belongs to that object) 
// An Object's Method holds a function (that belongs to that object).

var myArray2 = [
    100,
    200,
    function () {
        console.log("Hello");
    },
    400
];

myArray2[2](); // Runs the function in the array at index 2