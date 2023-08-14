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
            
            // console.log(computerChoice) //works
            // console.log(playerChoice) //works
            
            playRound(playerChoice, computerChoice); //works
        
            
        })       
    })
    

}

// const updateScore = () => {
//      pScore.textContent = playerScore;
//     cScore.textContent = cScore;
// }


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

//task 3 - create an update score function. The update score function doesn't work. Rethink how this all links together!


//player hand function change -- not needed in the end
//player hand changes on selection
// const playerChangeImage = (playerChoice) => {
//     if (playerChoice === 'rock') {
//         playerHand.src = './images/player-hand/rock.webp'
//         return;
//     }
//     if (playerChoice === 'paper') {
//         playerHand.src = './images/player-hand/paper.webp'
//         return;
//     }
//     if (playerChoice === 'scissors') {
//         playerHand.src = './images/player-hand/scissors.webp'
//         return;
//     }
// }
