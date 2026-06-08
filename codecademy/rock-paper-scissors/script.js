const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
if ((userInput === 'rock') || (userInput === 'paper') || (userInput === 'scissors') || userInput === 'bomb') {
  return userInput;
} else {
  return 'Incorrect input.';
}
};

const getComputerChoice = () => {
let number = Math.floor(Math.random() * 3);
if (number === 0) {
  return 'rock'
} else if (number === 1) {
 return 'paper'
} else if (number === 2) {
  return 'scissors'
}
};

const determineWinner = (userChoice, computerChoice) => {
if (userChoice === 'bomb') {
  return 'User won';
}

if (userChoice === computerChoice) {
    return 'The game was a tie';
}

if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'Computer won';
  } else {
    return 'User won';
  }
}

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Computer won';
  } else {
    return 'User won';
  }
}

if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Computer won';
  } else {
    return 'User won';
  }
}
};

function playGame() {
  let userChoice = getUserChoice('rock');
  let computerChoice = getComputerChoice();

console.log(`User chose: ${userChoice}`);
  console.log(`Computer chose: ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();
