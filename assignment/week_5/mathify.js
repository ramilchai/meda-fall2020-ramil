function add(num1, num2) {
    var sum = num1 + num2;
    return sum;
}

function subtract(num1, num2, reverse) {

    if (reverse == true) {
        var difference = num2 - num1;
    } else {
        var difference = num1 - num2; 
    }

    return difference;
}

function multiply(num1, num2) {
    var product = num1 * num2; 
    return product;
}

function divide(num1, num2) {
    var quotient = num1 / num2; 
    return quotient;
}

function circleArea(radius) {
    var sqrRadius = multiply(radius, radius);
    var pi = Math.PI;
    var area = multiply(sqrRadius, pi);
    return area;
}

console.log(circleArea(7));

