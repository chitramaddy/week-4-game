//variables targetScore, wins, losses, crystalArray[];, totalScore,
var targetScore;
//var crystalArray = [];
//var randomValue = [];
var totalScore = 0;
var wins = 0;
var losses = 0;
var gameRunning = false;
var isScored = false;

//DOM elements for variables

var targetScoreHTML = document.getElementById('targetScore');
var totalScoreHTML = document.getElementById('totalScore');
var crystalArrayHTML = document.getElementsByClassName('crystals');
console.log(crystalArrayHTML);
var winsHTML = document.getElementById('wins');
var lossesHTML = document.getElementById('losses');

//This creates new button for starting the game
var startBtn = $("<button>");

startBtn.addClass("button");

startBtn.html("<i class='fas fa-play-circle big'></i>");

$(".game").append(startBtn);



//this will generate a random integer
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//to check if the player won
function checkWin() {
    
    if(isScored===true) return;

    if (targetScore === totalScore) {
        wins++;
        console.log(wins);
        isScored = true;
        $("#wins").text("wins: " + wins);
        gameRunning = false;
        $(".button").show(this);

    }
}

function checkLost() {

    if(isScored===true) return;

    if (targetScore < totalScore) {
        losses++;
        isScored = true;
        $("#losses").text("losses: " + losses);
        gameRunning = false;
        

        $(".button").show(this);
    }
    checkWin();
}


$(document).ready(function () {

    $(".button").on("click", function () {

        $(".button").hide(this);
        gameRunning = true;
        isScored = false;
        $("#totalScore").empty();
        totalScore=0;
        
        targetScore = getRndInteger(19, 120);
        console.log("targetScore" + targetScore)
        $("#targetScore").html(targetScore);


        $(".img-thumbnail").each(function () {
            $(this).attr("data-value", getRndInteger(1, 12));
        })

    });


    $(".img-thumbnail").on("click", function () {
        if (gameRunning) {
            var value = parseInt($(this).attr("data-value"));
            totalScore += value;
            $("#totalScore").text(totalScore);
        }
        checkLost();
    });
       
});