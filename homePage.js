var firstButton = document.getElementById("first");
var h1 =document.querySelector("h1");
var buttonsDiv = document.getElementsByClassName("buttons");


var firstClick = function() {
    h1.innerHTML = "Do you know what FizzBuzz is?";

    firstButton.innerHTML = "No";
    firstButton.removeEventListener("click", firstClick);

    var yesButton = document.createElement("button");
    yesButton.innerHTML = "Yes";
    buttonsDiv[0].appendChild(yesButton)

    var secondClickNo = function() {
        window.location.href='no.html';
    }

    var secondClickYes = function() {
        window.location.href='play.html';
    }

    firstButton.addEventListener("click", secondClickNo);
    yesButton.addEventListener("click", secondClickYes);
}
firstButton.addEventListener("click", firstClick);