//Rock, Paper, Scissors.

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  //checking whether the user gives a valid choice
  if (userInput==='rock' || userInput==='scissors' || userInput==='paper' || userInput==='bomb'){return userInput}
  else {return 'invalid choice'}
};

const getComputerChoice = () => {
  const options = ['rock','paper','scissors'];
  const choice = Math.floor(Math.random()*3);
  return options[choice]
};

const determineWinner = (userChoice,computerChoice) => {
  if (userChoice==='bomb'){
    return 'why are you using a cheat code'
  }
  else if (userChoice===computerChoice){
    return 'your game was a tie'
  }
  else if(userChoice==='rock'){
    if (computerChoice==='paper'){
      return 'the computer won!'
    }
    else {return 'you won!'}
  }
  else if(userChoice==='paper'){
    if (computerChoice==='scissors'){
      return 'the computer won!'}
    else {return 'you won!'}
    }
  else if(userChoice==='scissors'){
    if (computerChoice==='rock'){
      return 'the computer won!'
    }
    else {return 'you won!'}
  }
  }


// playGame allows you to put in userInput
const playGame = (userInput) => {
  const userChoice = getUserChoice(userInput);
  const computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice,computerChoice))
}
