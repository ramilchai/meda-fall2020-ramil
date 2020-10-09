var string = "This is a sentence.";


var stringArray = string.split("");

console.log(stringArray);

updateString = stringArray.join("");

console.log(updateString);

var firstMatch = -1; 

for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === "e") //if it isn't string, it's automatically false 
    {   console.log("We found an e!");

        firstMatch = i;

        stringArray[firstMatch] = "E";

        continue; // This will ignore the following code and move on with the rest of the loop

    }
        console.log("No e here!");
    }
