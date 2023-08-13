let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('computerScore')
const winner = document.querySelector('.winner');
const choiceBtns = document.querySelectorAll('.choice-btn');
const computerHand = document.querySelector('.computer-hand');
const playerHand = document.querySelector('player-hand');
const hands = document.querySelectorAll('.hands img'
);

let playerChoice; //playerChoice
let computerChoice
let playRoundResult;

playerScore = 0;
computerScore = 0;

 //establish computer choice
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
computerChoice = getComputerSelection();




choiceBtns.forEach(choiceBtn => {
    choiceBtn.addEventListener('click', () => {
        console.log(computerChoice)
        playerChoice = choiceBtn.textContent;
        console.log(playerChoice)
        

        playRound(playerChoice, computerChoice);

        // Update images
        playerHand.src = `images/player-hand/${playerChoice}.webp`;
        computerHand.src = `images/computer-hand/${computerChoice}.webp`;
    })
})





const playRound = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) {
        winner.textContent = `It's a draw!`;
        return;
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            winner.textContent = 'Player wins!';
            return;
        } else {
            winner.textContent = 'Computer Wins!';
            return;
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            winner.textContent = 'Player wins!';
            return;
        } else {
            winner.textContent = 'Computer Wins!';
            return;
        } 
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            winner.textContent = 'Player wins!';
            return;
        } else {
            winner.textContent = 'Computer Wins!';
            return;
        }
    }
}