let pScore = document.querySelector('.pScore');
let cScore = document.querySelector('cScore');
const winner = document.querySelector('.winner');
const choiceBtns = document.querySelectorAll('.choice-btn');
const computerHand = document.querySelector('.computer-hand');
const playerHand = document.querySelector('player-hand');

const hands = document.querySelectorAll('.hands'
);

let playerChoice; //playerChoice
let computerChoice
let playRoundResult;

pScore = 0;
cScore = 0;

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

        playerHand.src = `/images/${playerChoice}.webp`;
        computerHand.src = `images/${computerChoice}.webp`;
        
    
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
            pScore++;
            pScore.textContent;
            return;
        } else {
            winner.textContent = 'Computer Wins!';
            cScore++;
            cScore.textContent;
            return;
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            winner.textContent = 'Player wins!';
            pScore++;
            pScore.textContent;
            return;
        } else {
            winner.textContent = 'Computer Wins!';
            cScore++;
            cScore.textContent;
            return;
        } 
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            winner.textContent = 'Player wins!';
            pScore++;
            pScore.textContent;
            return;
        } else {
            winner.textContent = 'Computer Wins!';
            cScore++;
            cScore.textContent;
            return;
        }
    }
}