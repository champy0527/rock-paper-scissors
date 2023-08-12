let playRoundResult;
let userScore = 0;
let computerScore = 0;


const playGame = () => {   
    for (let i = 0; i < 5; i++) {
        let randomNumber = Math.floor(Math.random() * 3);
        const getComputerSelection = () => {
            switch (randomNumber) {
                case 0:
                    return 'rock';
                case 1:   
                    return 'paper';
                case 2:   
                    return 'scissors';
            }
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


        //start game when user clicks button

        
        let userInput = prompt("Choose between ROCK, PAPER, or SCISSORS.")
        let computerSelection = getComputerSelection()
        
        const userSelection = userInput.toLowerCase();
        
        playRoundResult = playRound(userSelection, computerSelection);


        confirm(`You picked ${userSelection}`)
        console.log(`Computer picked ${computerSelection}`)

        console.log(`You picked ${userSelection}`)
        console.log(`Computer picked ${computerSelection}`)

        console.log(playRoundResult)
        console.log(playRoundResult);
    }
}

playGame();

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
