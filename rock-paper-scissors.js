// Generate User Choice
const userInput = prompt("Choose between ROCK, PAPER, or SCISSORS.")

const UserSelection = userInput.toLowerCase();
console.log(UserSelection);

// Generate Computer Choice
const getComputerSelection = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:   
            return 'paper';
        case 2:   
            return 'scissors';
    }
}

const computerSelection = getComputerSelection()
console.log(computerSelection)

const playRound = (userSelection, computerSelection) => {
    switch (userSelection) {
        case 'rock' :
            switch (computerSelection) {
                case 'rock' :
                    return 'This round is a tie.'
                case 'scissors' :
                    return 'You win this round. Rock beats Scissors.'
                default :
                    'The computer wins. Paper beats Rock.'
            }
        case 'paper' :
            switch (computerSelection) {
                case 'paper' :
                    return 'This round is a tie.'
                case 'rock' :
                    return 'You win this round. Paper beats Rock.'
                default :
                    'The computer wins. Scissors beat Paper.'
            }
        case 'scissors' :
            switch (computerSelection) {
                case 'scissors' :
                    return 'This round is a tie.'
                case 'paper' :
                    return 'You win this round. Scissors beat Paper'
                default :
                    'The computer wins. Rock beats scissors.'
            }
        default :
            return 'You entered an invalid answer. This round is void.'
    }
}



alert(playRound(UserSelection, computerSelection))

// const userSelection = getUserChoice;
// const computerSelection = getComputerChoice;