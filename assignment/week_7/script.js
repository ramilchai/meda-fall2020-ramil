$(function() {
    var myBox = $("#box"); 

    // setTimeout(function(){
    //     myBox.css("background-color", "red"); 

    // }, 3000);

    // setTimeout(function(){
    //     myBox.css("background-color", "green"); 
    // }, 6000);
    
    var orangeButton = $("#orange-button");

    orangeButton.click(function() {
        myBox.css("background-color", "orange");
    });

    var purpleButton = $("#purple-button");

    purpleButton.click(function() {
        myBox.css("background-color", "purple");
    });

    $("#pink-button").click(function() {
        myBox.css("background-color", "pink");
    });
    //when modify DOM, it will appear in style attribute which taking over everything
    
});