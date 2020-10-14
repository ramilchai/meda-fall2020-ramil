$(function(){
    
    setTimeout(function() {
        $("body").append("<div id='content'></div>");
        //.append ADDS to existing children, and is placed at the end of the children's list.

        $("div#content").html("<p>Only Fox God Knows!</p>"); //.html REMOVES existing children elements of selected element, and adds in what we typed in the argument.

        $("body").prepend("<h1>PA PA YA PA PA YA!</h1>");
        //.prepend ADDs to the beginning of children.
    }, 5000);

    
    var myFavBand = ["Babymetal", "Gojira", "Oasis"];
    var newHTMLCode = 
    `<ul>
        <li>${myFavBand[0]}</li>
        <li>${myFavBand[1]}</li> 
        <li>${myFavBand[2]}</li>       
    </ul>`;
    
    //String literal using a sign "`" and we can refer to variable outside the string by using ${varName}.

    $("body").append(newHTMLCode);

    $("button#create-fox").click(function() {
        $("h1").hide();
        //.hide() ---> visually hides element, code still exists
        //.empty() ---> removes children code.
        //.remove() ---> removes selected element.
        $("body").append("<div style='width: 100px; height: 100px; border: 1px black solid;'></div>");
    });
});