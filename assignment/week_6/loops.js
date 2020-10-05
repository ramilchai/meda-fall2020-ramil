// while loop

var counter = 0;

while (counter < 10) {
    console.log("Liverpool");

    counter = counter + 1;
    // run code WHILE the condition is true.
}

// do while loop
// the loop will run once before checking wheither it's true or not
do {} while (false);

// for loop
for (var i = 0; i < 10; i = i + 1) {
    console.log("Champions");
}

someNumber++; //someNumber = someNumber + 1;
someNumber--; //someNumber = someNumber - 1;
someNumber += 2; //someNumber = someNumber + 2;
someNumber -= 2; //someNumber = someNumber - 2;
someNumber /= 3; 
someNumber *= 3;

// break and continue
// break: stop loop imidiately 
// continue continue the next iteration of the loop right away
for (var i =0; i < 0; i = i +1) {
    console.log("running with break");
    break;
}