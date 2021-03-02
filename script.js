let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

const getAbsoluteDistance = (target, guess) => Math.abs(target - guess);

const compareGuesses = (humanGuess, compGuess, target) => {
  if (humanGuess < 0 || humanGuess > 10) {
    alert('Your number is out of range. Please try again.');
  }

  humanAbsoluteDist = getAbsoluteDistance(target, humanGuess)
  compAbsoluteDist = getAbsoluteDistance(target, compGuess)

  if (humanAbsoluteDist === compAbsoluteDist) {
    return true;
  }
  return humanAbsoluteDist < compAbsoluteDist ? true : false;
}

const updateScore = (str) => {
  switch (str) {
    case 'human':
      humanScore += 1;
      break;
    case 'computer':
      computerScore += 1;
      break;
  }
}

const advanceRound = () => {
  currentRoundNumber += 1;
}
