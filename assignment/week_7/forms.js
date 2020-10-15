$(function(){

    $("#plus").click(function(event) {
        event.preventDefault();
        
        var firstNumber = $("#num1").val();
        var secondNumber = $("#num2").val();
        console.log(firstNumber);
        console.log(secondNumber);

        var firstNumberConverted = parseInt(firstNumber);
        var secondNumberConverted = parseInt(secondNumber);

        if (isNaN(firstNumberConverted) || isNaN(secondNumberConverted)) {
            $("#results").html("Error: One of your numbers is not a number!");
            $("#results").css("color", "red");
        } else {
            var sum = firstNumberConverted + secondNumberConverted;
            $("#results").html(sum);
            $("#results").css("color", "black");
        }

        
        
    });
    

});