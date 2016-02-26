////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt("Please choose either 'rock', 'paper', or 'scissors.' ");
    
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
     // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
  return (move || getInput());
    
}

function getComputerMove(move) {
     // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
     return (move || randomPlay());
    
}

function getWinner(playerMove,computerMove) {
    var winner = "";

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    
    if(playerMove == "rock" && computerMove == "rock")
        winner = "tie";
    if(playerMove == "paper" && computerMove == "paper")
        winner = "tie"
    if(playerMove == "scissors" && computerMove == "scissors")
        winner = "tie"
    if(playerMove == "paper" && computerMove == "rock")
        winner = "player"
    if(playerMove == "rock" && computerMove == "paper")
        winner = "computer"
    if(playerMove == "paper" && computerMove == "scissors")
        winner = "computer"
    if(playerMove == "scissors" && computerMove == "paper")
        winner = "player"
    if(playerMove == "scissors" && computerMove == "rock")
        winner = "computer"
    if(playerMove == "rock" && computerMove == "scissors")
        winner = "player"
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors!");
    console.log("\n");
    var playerWins = 0;
    var computerWins = 0;
   
    while (playerWins < 5 && computerWins < 5) {
        
    var playerMove = getPlayerMove();
    var computerMove = getComputerMove();
    var winner = getWinner(playerMove, computerMove);
   
    
        if(winner === "player") {
            playerWins += 1;
             console.log("\n");
            console.log('You chose ' + playerMove + ' and computer chose ' + computerMove + '.');
             console.log("\n");
            console.log('The score is ' + playerWins + ' to ' + computerWins + '.'); 
            console.log("\n");
        }
            
            else if ( winner === "computer") {
                computerWins += 1;
                 console.log("\n");
             console.log('You chose ' + playerMove + ' and computer chose ' + computerMove + '.'); 
            console.log("\n");
            console.log('The score is ' + playerWins + ' to ' + computerWins + '.'); 
            console.log("\n");
            }
             
             else if (winner === "tie") {
                  console.log("\n");
                console.log('It is a tie! The score is ' + playerWins + ' to ' + computerWins + '.');
                console.log("\n");
             } 
             if(playerWins === 5) {
                console.log("\n");
                console.log( 'You Win!'); 
                 
             }
            
             if (computerWins === 5){
                  console.log("\n");
                  console.log('You lose!');
            }
                console.log("\n");
               
}

console.log('Your score is ' + playerWins + ". The computer's score is " + computerWins + '.');

    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    //return [playerWins, computerWins];
}
playToFive();

