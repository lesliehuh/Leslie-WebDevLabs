// home page greeter
function greeter () {
    var d = new Date();
    var h = d.getHours();
    
    var temp = document.getElementById("greeter");

    if (h < 12) {
        temp.innerHTML = "Good morning!";
    } else if ( h >= 12 && h < 18) {
        temp.innerHTML = "Good afternoon!";
    } else if ( h >= 18 && h < 20) {
        temp.innerHTML = "Good evening!";
    } else {
        temp.innerHTML = "Good night!";
    }
}

greeter();
