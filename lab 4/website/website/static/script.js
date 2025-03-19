
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
    console.log (temp);
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

$("#hobbyMore").click(function(){
    var hobby = $("#hobbies");

    if (hobby.is(":visible")) {
        hobby.hide();
        $("#hobbyMore").text("Reveal");
    } else {
        hobby.show();
        $("#hobbyMore").text("Hide");
    }
});

function formVal () {
    console.log("crashing out");
    // getting field inputs
    const name = $("#name");
    const comment = $("#comment");
    const email = $("#email");

    // setting field labels back to default when run again
    $("#name_label").css("color", "").text("Name:");
    $("#email_label").css("color", "").text("Email:");
    $("#comment_label").css("color", "").text("Comment:");

    let out = true;

    if (name.val() === "") {
        $("#name_label").css("color", "red");
        $("#name_label").text("Name: Please enter a valid name.");
        out = false;
    }
    if (email.val() === "" || !email[0].checkValidity()) {
        $("#email_label").css("color", "red");
        $("#email_label").text("Email: Please enter a valid email.");
        out = false;
    }
    if (comment.val() === "") {
        $("#comment_label").css("color", "red");
        $("#comment_label").text("Comment: Please enter a valid comment.");
        out = false;
    } 

    if (!out) {
        alert ("Please check for invalid responses.")
    }
}

$("#submit").click(function (event) {
    event.preventDefault();
    console.log("form submitted");
    formVal();
});