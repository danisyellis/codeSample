/* basic fizzBuzz on a website, with parameters for later substitution*/
var fizzBuzzDiv = document.getElementsByClassName("fizzBuzz");

var theBuzz = function(a, b) {
    fizzBuzzDiv[0].innerHTML = ""
    for(i=1; i<101; i++){
        if(i%15===0){
            var nextNumber = document.createElement("p");
            nextNumber.innerHTML = a + b + "!";
            fizzBuzzDiv[0].appendChild(nextNumber);
        }
        else if(i%3===0){
            var nextNumber = document.createElement("p");
            nextNumber.innerHTML = a;
            fizzBuzzDiv[0].appendChild(nextNumber);        }
        else if(i%5===0){
            var nextNumber = document.createElement("p");
            nextNumber.innerHTML = b;
            fizzBuzzDiv[0].appendChild(nextNumber);        }
        else {
            var nextNumber = document.createElement("p");
            nextNumber.innerHTML = i;
            fizzBuzzDiv[0].appendChild(nextNumber);        }
    }
}


/* routing so the Got It button redirects to the Play page when clicked*/
var gotItButton = document.getElementById("noPageButton");
var redirectToPlay = function() {
    window.location.href='play.html';
}


/* functionality to change the words "fizz" and "buzz"*/
var playButton = document.getElementById("playNow");
var homeLink = document.getElementsByTagName("a")

var playFizzBuzz = function(event) {
    homeLink[0].style.display = "none";
    var newFizz = document.getElementById("newFizz").value;
    var newBuzz = document.getElementById("newBuzz").value;
    var homeLinkAfter = document.getElementById("homeLink");
    theBuzz(newFizz, newBuzz);
    homeLinkAfter.appendChild(homeLink[0]);
    homeLink[0].style.display = "inline"

}

playButton.addEventListener("click", playFizzBuzz);


/* Greet my user on the play page */
var greetingHtml = document.querySelector("h1")
if (person != null && person != "") {
    var greeting = document.createElement("h1");
    greeting.innerHTML = "Ok, " + person + ".<br/> Would you like to make FizzBuzz your own?";
    greetingHtml.appendChild(greeting)
}






