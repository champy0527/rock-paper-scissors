# Rock Paper Scissors Game

A browser-based Rock Paper Scissors game built using HTML, CSS, and JavaScript. Play against the computer, watch the animations, and see who reaches the winning score first.

## Demo

You can access a live version of the game [here](https://champy0527.github.io/rock-paper-scissors).

## Features

- **Player vs Computer**: Choose rock, paper, or scissors, and play against the computer's randomly generated choice.
- **Score Tracking**: The game keeps track of the player's and computer's scores.
- **Animations**: Both player and computer hand animations enhance the gaming experience.
- **Game Over Condition**: The first to reach 5 points wins.

## Technologies Used

- **HTML**: The basic structure and elements of the game.
- **CSS**: Styling for a visually appealing layout and hand animations.
- **JavaScript**: Handles the game logic, score tracking, and DOM manipulation.

## Getting Started

To run the Rock Paper Scissors game locally:

1. Clone the repository:

    ```bash
    git clone https://github.com/champy0527/rock-paper-scissors.git
    ```

2. Navigate to the project directory and open `index.html` in your preferred browser.

## How to Play

1. **Make Your Choice**: Click on Rock, Paper, or Scissors.
2. **See the Result**: The computer will also make a choice, and the result of the round will be displayed.
3. **Winning Condition**: The first to reach 5 points wins the game.
4. **Watch the Animation**: Both the player’s and computer’s hands will animate with each round.

## Code Overview

- **Computer Selection**: The computer's choice is generated randomly using the `getComputerSelection()` function.
- **Player Interaction**: Players click a button to make their choice, which triggers the game logic via event listeners.
- **Game Logic**: The `playRound()` function determines the winner of each round based on the player's and computer's choices, updating the scores accordingly.
- **Score and Animation Updates**: The game updates the DOM to reflect the current score and animates the hands to make gameplay more engaging.

## Lessons Learned

- Practiced DOM manipulation and handling user events with JavaScript.
- Improved understanding of JavaScript functions and conditionals for game logic.
- Utilized CSS animations to create engaging user experiences.

## Future Improvements

- Add a reset button to restart the game without refreshing the page.
- Implement sound effects to enhance the gameplay experience.
- Improve the UI by adding more animations or visual effects.
- Add more features like "best of three" game modes or even difficulty levels.

## Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests for any improvements or bug fixes.

## Acknowledgements

- [The Odin Project](https://www.theodinproject.com) for providing guidance and inspiration.
- Various online resources and communities for support and​⬤
