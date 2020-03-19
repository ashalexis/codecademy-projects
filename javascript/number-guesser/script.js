let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random()*10)}

const compareGuesses = (humanGuess,computerGuess,targetGuess) => {
  if (humanGuess>10){
    alert("You're out of range! Choose a number between 0 and 10.")
  }
  else{
    const user_target = Math.abs(humanGuess-targetGuess)
  const comp_target = Math.abs(computerGuess-targetGuess)
  if (user_target<comp_target){
    return true
  }
  else {return false}
      }
}

const updateScore = (winner) => {
  if (winner==='human'){humanScore++}
  else if (winner==='computer'){computerScore++}
}

const advanceRound = () => {
  currentRoundNumber++
}
