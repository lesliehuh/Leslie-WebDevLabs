

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

function addYear () {
    const d = new Date();
    const y = d.getFullYear();

    const temp = document.getElementById("copyYear");
    temp.innerHTML = "&copy;" + y + " designed🎨 and coded👩🏻‍💻 by Leslie Huh"
    greetingFunc ();
}

// show more button in home page
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

// for showing / hiding hobbies
// function showList() {
//     $("#hobbies").css("display", "block");
//     $("#showButton").css("display", "none");
// }

function formVal () {
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

function getAdvice() {
    let url = "https://api.adviceslip.com/advice";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").textContent = data.slip.advice;
    })
        .catch(err => {
            console.error("Error: ", err);
    });
}