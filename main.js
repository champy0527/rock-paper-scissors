const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const winner = document.querySelector('.winner');
const choiceBtns = document.querySelectorAll('.choice-btn');
const computerHand = document.getElementById('computer-hand');
const playerHand = document.getElementById('player-hand');
let image = document.querySelectorAll('.image');


let playerChoice; //playerChoice
let computerChoice
let playRoundResult;


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

let wholeWinner;

image.forEach(image => {
    image.addEventListener('animationend', function(){
        this.style.animation = '';
    })
})


const playGame = () => {

    choiceBtns.forEach(choiceBtn => {
        choiceBtn.addEventListener('click', () => {
            
            playerHand.style.animation = "shakeHand 0.75s ease";
            computerHand.style.animation = "shakeHand 0.75s ease";
            
            if(playerScore > 5 || computerScore > 5)  {
                return;
            }
    
            playerChoice = choiceBtn.textContent;
            playerHand.src = './images/player-hand/'+ playerChoice +'.webp'
            

            playRound(playerChoice, computerChoice); 
            
        })       
    })
    

}



let playerScore = 1;
let computerScore = 1;
const playRound = (playerChoice, computerChoice) => {

    computerChoice = getComputerSelection();
    computerHand.src = './images/computer-hand/'+ computerChoice +'.webp'

    if (playerChoice === computerChoice) {
        winner.textContent = `It's a draw!`;
        return;
    }

    if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
            pScore.textContent = playerScore++;
            winner.textContent = 'Player wins!';
            return;
        } else {
            cScore.textContent = computerScore++;
            winner.textContent = 'Computer Wins!';
            return;
        }
    }

    if (playerChoice === 'paper') {
        if (computerChoice === 'rock') {
            pScore.textContent = playerScore++;
            winner.textContent = 'Player wins!';
            return;
        } else {
            cScore.textContent = computerScore++;
            winner.textContent = 'Computer Wins!';
            return;
        } 
    }

    if (playerChoice === 'scissors') {
        if (computerChoice === 'paper') {
            pScore.textContent = playerScore++;
            winner.textContent = 'Player wins!';
            return;
        } else {
            cScore.textContent = computerScore++;
            winner.textContent = 'Computer Wins!';
            return;
        }
    }

    
    
}

playGame();
