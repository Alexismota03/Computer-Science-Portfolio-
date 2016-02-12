var compMove;
var turnedNumber = 0;
var restart = document.getElementById("restart");
var boardCheck; // function to check value in each cell

// value within each cell
var a1 = document.getElementById("a1")
var a2 = document.getElementById("a2")
var a3 = document.getElementById("a3")
var b1 = document.getElementById("b1")
var b2 = document.getElementById("b2")
var b3 = document.getElementById("b3")
var c1 = document.getElementById("c1")
var c2 = document.getElementById("c2")
var c3 = document.getElementById("c3")

var spots = document.getElementsByTagName("td");

a1.addEventListener("click", runGame);
a2.addEventListener("click", runGame);
a3.addEventListener("click", runGame);
b1.addEventListener("click", runGame);
b2.addEventListener("click", runGame);
b3.addEventListener("click", runGame);
c1.addEventListener("click", runGame);
c2.addEventListener("click", runGame);
c3.addEventListener("click", runGame);

function runGame(evt) {

    if (evt.target.innerHTML !== "X" && evt.target.innerHTML !== "O") {

        if (turnedNumber % 2 == 0) {
            evt.target.innerHTML = "X"

        }
        else {
            evt.target.innerHTML = "O"

        }

        turnedNumber++
    }
    checkWin();
}

restart.addEventListener("click", function(event) {
    turnedNumber = 0;
    for (var i = 0; i < spots.length; i++) {
        spots[i].innerHTML = "";
    }



})

 // function that checks the board for winning combo
function checkWin() {

    if ((a1.innerHTML == a2.innerHTML && a1.innerHTML == a3.innerHTML && a1.innerHTML == "X") ||
        (b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML && (b1.innerHTML == "X")) ||
        (c1.innerHTML == c2.innerHTML && c1.innerHTML == c3.innerHTML && (c1.innerHTML == "X")) ||
        (a1.innerHTML == b1.innerHTML && a1.innerHTML == c1.innerHTML && (a1.innerHTML == "X")) ||
        (a2.innerHTML == b2.innerHTML && a2.innerHTML == c2.innerHTML && (a2.innerHTML == "X")) ||
        (a3.innerHTML == b3.innerHTML && a3.innerHTML == c3.innerHTML && (a3.innerHTML == "X")) ||
        (a1.innerHTML == b2.innerHTML && a1.innerHTML == c3.innerHTML && (a1.innerHTML == "X")) ||
        (a3.innerHTML == b2.innerHTML && a3.innerHTML == c1.innerHTML && (a3.innerHTML == "X"))
    ) {
        xWin = true;
        winAlert();

    }
    else if ((a1.innerHTML == a2.innerHTML && a1.innerHTML == a3.innerHTML && (a1.innerHTML == "O")) ||
        (b1.innerHTML == b2.innerHTML && b1.innerHTML == b3.innerHTML && (b1.innerHTML == "O")) ||
        (c1.innerHTML == c2.innerHTML && c1.innerHTML == c3.innerHTML && (c1.innerHTML == "O")) ||
        (a1.innerHTML == b1.innerHTML && a1.innerHTML == c1.innerHTML && (a1.innerHTML == "O")) ||
        (a2.innerHTML == b2.innerHTML && a2.innerHTML == c2.innerHTML && (a2.innerHTML == "O")) ||
        (a3.innerHTML == b3.innerHTML && a3.innerHTML == c3.innerHTML && (a3.innerHTML == "O")) ||
        (a1.innerHTML == b2.innerHTML && a1.innerHTML == c3.innerHTML && (a1.innerHTML == "O")) ||
        (a3.innerHTML == b2.innerHTML && a3.innerHTML == c1.innerHTML && (a3.innerHTML == ""))
    ) {
        oWin = true;
        winAlert();
    }
}


var xWin; // true if X wins 
var oWin; // true if O wins 
var winAlert; // function that declares winner

function winAlert() {
    if (xWin == true) {
        alert("Player 1 Wins");
    }
    else {

        alert("Player 2 Wins");

    }
};
