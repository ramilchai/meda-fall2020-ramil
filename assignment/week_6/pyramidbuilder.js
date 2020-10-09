var column = "";

for (var i = 0; i < 10; i = i + 1) {

    column = column + "*";

    console.log(column);
}

// console.log("final column state:", column);

// var columnArray = column.split("");

// console.log(columnArray);

// columnArray.pop();

// console.log(columnArray);

// var updateColumn = columnArray.join("");

// console.log(columnArray);

for (var i = 0; i < 10; i = i + 1) {
    var columnArray = column.split("");
    columnArray.pop();
    column = columnArray.join("");
    console.log(column);
}

var test1 = [ 1,2,3,4,5]; 


function move(input) {
    let n = input.length;
    let output = [];
    for (let i = 0; i < n; i++) {
        
        output.push(input.pop());
    }
    return output;

}

console.log(move(test1));
