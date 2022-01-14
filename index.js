var randomNumber1 = Math.floor(Math.random() * 6) + 1; //generating a random number from 1-6

var randomDiceImage =  "dice" + randomNumber1  + ".png"; //assigned a random dice image based off number generated from var randomNumber 1

var randomImageSource = "images/" + randomDiceImage; //creates an img source based off whichever dice image was assigned to randomDiceImage

var image1 = document.querySelector(".img1"); //selecting the .img1 class in the DOM and assigning it to the var image1

image1.setAttribute("src", randomImageSource); //changing the value of the attribute set to .img1 to the randomImageSource generated 


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png"

var randomImageSource2 = "images/" + randomDiceImage2; 

var image2 = document.querySelector(".img2");

image2.setAttribute("src", randomImageSource2);



//if player1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerText = "Player 1 wins!"
//if player 2 wins
} else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText = "Player 2 wins!"
//if a draw happens
} else {
    document.querySelector("h1").innerText = "Draw!"
}
