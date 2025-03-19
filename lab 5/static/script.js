
const x = 5;
const y = 7;
const z = x + y;
console.log(z);

const A = 'Hello ';
const B = 'world!';
const C = A + B;
console.log (C);

function sumNPrint (x1, x2) {
    const x3 = x1 + x2;
    console.log(x3);
    return x3;
}

sumNPrint(x, y);
sumNPrint(A, B);

if (C.length > z) {
    console.log (C);
} else if (C.length == z) {
    console.log ("Good job!");
} else {
    console.log("z");
}

const L1 = ["Watermelong", "Pineapple", "Pear", "Banana"];
const L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana (x) {
    if (x == "Banana") {
        alert("Found the banana!");
    }
}
// L1.forEach (findTheBanana);
// L2.forEach (findTheBanana);

function greetingFunc () {
    const d = new Date();
    var h = d.getHours (); // current hour

    var temp = document.getElementById("greeting");

    if (h < 12) {
        temp.innerHTML = "Good morning! I'm Leslie.";
    } else if (h >= 12 && h < 18) {
        temp.innerHTML = "Good afternoon! I'm Leslie.";
    } else if (h >= 18 && h < 20) {
        temp.innerHTML = "Good evening! I'm Leslie.";
    } else {
        temp.innerHTML = "Good night! I'm Leslie.";
    }
}
//greetingFunc();

function addYear () {
    const d = new Date();
    const y = d.getFullYear();

    const temp = document.getElementById("copyYear");
    temp.innerHTML = "&copy;" + y + " designed🎨 and coded👩🏻‍💻 by Leslie Huh"
    greetingFunc ();
}

$("#bioMore").click(function(){
    var bioText = $("#xtnded");

    if (bioText.is(":visible")) {
        bioText.hide();
        $("#bioMore").text("Read more...");
    } else {
        bioText.show();
        $("#bioMore").text("Read less...");
    }
});

function showList() {
    $("#hobbies").css("display", "block");
    $("#showButton").css("display", "none");
}

function formVal () {
    console.log("crashing out");
    // getting field inputs
    const name = document.getElementById("name");
    const comment = document.getElementById("comment");
    const email = document.getElementById("email");
    
    if (!name.checkValidity()) {
        document.getElementById("nameErr").innerHTML = "Please enter a valid name";
    }
    if (!email.checkValidity()) {
        document.getElementById("emailErr").innerHTML = "Please enter a valid email"
    }
    if (!comment.checkValidity()) {
        document.getElementById("commErr").innerHTML = "Please enter a valid comment.";
    }
}