/* 3. Here's how the app works:

   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

##### Option 1 Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.
*/

//set up vars

//generate random number

//show it on the dom

//set up on click and store numbers add and show on dom

//make wins and looses function and show on dom and restart without refresh

// Initial variables

/* window.onload = function()
{
    if (window.jQuery)
    {
        alert('jQuery is loaded');
    }
    else
    {
        alert('jQuery is not loaded');
    }
}
*/
$(document).ready(function () {

  var computerScore;
  var greenValue;
  var redValue;
  var blueValue;
  var yellowValue;
  var totalScore = [0];
  var sum = [0];

  var computerScoreDOM = $("#computerscore");
  var totalScoreDOM = $("#totalscore");
  totalScoreDOM.text(sum);

  function genComputerScore() {
    computerScore = Math.floor(Math.random() * 121) + 19;
    computerScoreDOM.text("The Number is " + computerScore);
  }

  function genCrystalValues() {
    greenValue = Math.floor(Math.random() * 12) + 1;
    redValue = Math.floor(Math.random() * 12) + 1;
    blueValue = Math.floor(Math.random() * 12) + 1;
    yellowValue = Math.floor(Math.random() * 12) + 1;
  }


function userScore() {
  sum = 0;
    for (var i = 0; i < totalScore.length; i++) {
    sum += totalScore[i];
    }
  }

  function gameStart() {
    genCrystalValues();
    console.log(greenValue, redValue, blueValue, yellowValue);
    genComputerScore();
    console.log(computerScore);
    console.log(totalScore);
    }


$(".greenmateria").on("click", function () {
  console.log(greenValue);
  totalScore.push(greenValue);
  userScore();
    console.log("total " + sum);
    $("#totalscore").text(sum);
});

$(".redmateria").on("click", function () {
  console.log(redValue);
  totalScore.push(redValue);
  userScore();
    console.log("total " + sum);
    $("#totalscore").text(sum);
});

$(".bluemateria").on("click", function () {
  console.log(blueValue);
  totalScore.push(blueValue);
  userScore();
    console.log("total " + sum);
    $("#totalscore").text(sum);
});

$(".yellowmateria").on("click", function () {
  console.log(yellowValue);
  totalScore.push(yellowValue);
  userScore();
    console.log("total " + sum);
    $("#totalscore").text(sum);
});




    
    






gameStart();
});
