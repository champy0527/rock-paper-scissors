// Generate User Choice
const userInput = prompt("Choose between ROCK, PAPER, or SCISSORS.")

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput ==='rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      return userInput;
    }
}
// console.log(getUserChoice(userInput))
// test works


// Generate Computer Choice
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:   
            return 'paper';
        case 2:   
            return 'scissors';
        default:
            return 'Error';
    }
}
// console.log(getComputerChoice())
// test works


const determineRoundWinner = (getUserChoice, getComputerChoice) => {
    switch (getUserChoice) {
        case 'rock' :
            switch (getComputerChoice) {
                case 'rock' :
                    return alert('This round is a tie.')
                case 'scissors' :
                    return alert('You win this round. Rock beats Scissors.')
                default :
                    alert ('The computer wins. Paper beats Rock.' )
            }
        case 'paper' :
            switch (getComputerChoice) {
                case 'paper' :
                    return alert('This round is a tie.')
                case 'rock' :
                    return alert('You win this round. Paper beats Rock.')
                default :
                    alert('The computer wins. Scissors beat Paper.')
            }
        case 'scissors' :
            switch (getComputerChoice) {
                case 'scissors' :
                        return alert('This round is a tie.')
                case 'paper' :
                    return alert('You win this round. Scissors beat Paper')
                default :
                    alert('The computer wins. Rock beats scissors.')
            }
        // default: 
        //     return `Game error. ${userInput} is not a valid choice.`
    }
}

alert(determineRoundWinner(getUserChoice, getComputerChoice))

// const userSelection = getUserChoice;
// const computerSelection = getComputerChoice;