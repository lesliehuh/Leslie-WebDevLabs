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
    return;
}
// L1.forEach (findTheBanana);
// L2.forEach (findTheBanana);

function greetingFunc () {
    const d = new Date();
    const h = d.getHours (); // current hour

    const temp = document.getElementById("greeting");

    if (h < 12) {
        temp.innerHTML = ("Good morning! My name is Leslie");
    } else if (h >= 12 && h < 18) {
        temp.innerHTML = ("Good afternoon! My name is Leslie");
    } else if (h >= 18 && h < 20) {
        temp.innerHTML = ("Good evening! My name is Leslie");
    } else {
        temp.innerHTML = ("Good night! My name is Leslie");
    }
}

window.onload = function() {
    greetingFunc(); // Call greetingFunc when the page loads
};