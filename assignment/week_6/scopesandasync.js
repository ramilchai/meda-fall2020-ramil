// Synchronous 
console.log(1);
console.log(2);
console.log(3);


// Asynchronous

// setTimeout(function() {
//     console.log(5);
// }, 3000);

// var runForever = setInterval(function() {
//     console.log("3 seconds have passed.");
// }, 3000)

// clearInterval(runForever); 

var timer = setInterval(function() {
    console.log("1 second has passed");

}, 1000);

setTimeout(function() {
    console.log(5);

    clearInterval(timer);
}, 5000);

var myGlobalVariable = 100;

function someFuction() {
    var myLocalVariable = 10;  // We cannot access myLocalVariable because it is in a child scope.
}

// If statements do not have scopes.

if (false) {

}