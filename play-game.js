let playRoundResult;
let userScore = 0;
let computerScore = 0;

const rock = document.querySelectorAll('#rock');
const paper = document.querySelectorAll('#paper');
const scissors = document.querySelectorAll('#scissors');

let userInput;


//THIS IS MY ISSUE!
rock.addEventListener('click', function () {
    userInput === 'ROCK'
})
paper.addEventListener('click', function () {
    userInput === 'PAPER'
})
scissors.addEventListener('click', function () {
    userInput === 'SCISSORS'
})


let userSelection = userInput();

//Computer Choice

const getComputerSelection = () => {
    let computerChoices = ['rock', 'paper','scissors']
    return computerChoices[Math.floor(Math.random() * 3)]
}

const playRound = (userSelection, computerSelection) => {
    switch (userSelection) {
        case 'rock' :
            switch (computerSelection) {
                case 'rock' :
                    return 'This round is a tie.'
                case 'scissors' :
                    userScore++
                    return 'You win this round. Rock beats Scissors.'
                default :
                    computerScore++
                    return 'The computer wins. Paper beats Rock.'
            }
        case 'paper' :
            switch (computerSelection) {
                case 'paper' :
                    return 'This round is a tie.'
                case 'rock' :
                    userScore++
                    return 'You win this round. Paper beats Rock.'
                default :
                computerScore++
                return 'The computer wins. Scissors beat Paper.'
            }
        case 'scissors' :
            switch (computerSelection) {
                case 'scissors' :
                    return 'This round is a tie.'
                case 'paper' :
                    userScore++
                    return 'You win this round. Scissors beat Paper'
                default :
                    computerScore++
                    return 'The computer wins. Rock beats scissors.'
            }
        case '' :
            computerScore++
            return 'The computer wins. You gave an invalid answer'
        default :
            return 'You entered an invalid answer. This round is void.'
    }
}


 
let computerSelection = getComputerSelection()

playRoundResult = playRound(userSelection, computerSelection);


confirm(`You picked ${userSelection}`)
console.log(`Computer picked ${computerSelection}`)

console.log(`You picked ${userSelection}`)
console.log(`Computer picked ${computerSelection}`)

console.log(playRoundResult)
console.log(playRoundResult);


// playGame();

console.log(`Your score is ${userScore}`)
console.log(`The computer's score is ${computerScore}`)

if (userScore > computerScore) {
    console.log(`You won with a record of ${userScore} wins and ${computerScore} losses`)
    console.log(`You won with a record of ${userScore} wins and ${computerScore} losses`)
} else if (userScore < computerScore) {
    console.log(`You lost the game with a record of ${userScore} wins and ${computerScore} losses`)
    console.log(`You lost the game with a record of ${userScore} wins and ${computerScore} losses`)
} else {
    console.log(`This game is a tie. You won ${userScore} rounds and the computer won ${computerScore} rounds`)
    console.log(`This game is a tie. You won ${userScore} rounds and the computer won ${computerScore} rounds`)
}
