//create a button that changes the bg color to a random color from a selection of 16.7 million colors.


$(function() {
    $("button#button-color").click(function() {
        var red = Math.floor(Math.random() * 256);
        var green = Math.floor(Math.random() * 256);
        var blue = Math.floor(Math.random() * 256);


        var rgbColor = `rgb(${red}, ${green}, ${blue})`
        $("body").css("background-color", rgbColor);
    });
    
});
