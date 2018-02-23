//variables targetScore, wins, losses, crystalArray[];, totalScore,
var targetScore;
var crystalArray = [red, blue, pink, green];
var randomValue = [];
var totalScore = 0;
var wins;
var losses;
var gameRunning = false;

//DOM elements for variables

var targetScoreHTML = document.getElementById('targetScore');
var totalScoreHTML = document.getElementById('totalScore');
var crystalArrayHTML = document.getElementById('red', 'blue', 'pink', 'green');
var wins = document.getElementById('wins');
var losses = document.getElementById('losses');

//This creates new button for starting the game
var startBtn = $("<button>");

startBtn.addClass("button");

startBtn.attr("src", "<i class='fas fa-play-circle'></i>");

$(".crystals").append(startBtn);

//this will generate a random integer
function getRndInteger(min, max) {
   return Math.floor(Math.random() * (max - min + 1) ) + min;
}

$(document).ready(function(){

$(".button").on("click", function(){
    $(".button").hide(this);
    gameRunning ===true;

    var targetScore = getRndInteger(19,120);
    console.log("targetScore"+targetScore)
    $("#targetScore").html(targetScore);

    for(i=0; i<crystalArray.length; i++){
       randomValue = getRndInteger(1,12);
       console.log(randomValue);
    }

if (gameRunning){
    $(".img-thumbnail").on("click", function(){


    });


}
else (!gameRunning)









});

});







    //newGame()
    //when the start is pressed, hide it;
     

   // game is running = true;

    //Computer pick random number and store in target score
    //write the target score on DOM

    //for loop through the crystalArray and assign random number between 1-12 to each of them
    //var value = random number

    //on Click, take their value add it to the total score and check if computer score=total score, win ++
   // computerscore<totalscore, losses++

   // game is running = false

   // empty the values picked for the targetScore, gems
   // show the start button
    //alert the user to click start to begin a new game
