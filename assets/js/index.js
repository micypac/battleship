import Board from "./board.js";

let board;

// Game initialization.
const initializeGame = () => {
  board = new Board(); // creates a new board game
  console.log(board.grid);

  const mainSection = document.createElement("section");
  mainSection.classList.add("main-section");
  mainSection.setAttribute("id", "main");
  document.body.appendChild(mainSection);

  for (let i = 0; i < board.grid.length; i++) {
    for (let j = 0; j < board.grid[0].length; j++) {
      const square = document.createElement("div");
      square.classList.add("box");
      square.setAttribute("data-x", i);
      square.setAttribute("data-y", j);
      mainSection.appendChild(square);

      square.addEventListener("click", checkHit);
    }
  }
};

// Board squares event listener callback function
const checkHit = (event) => {
  const square = event.target;
  // call board method with square coordinates as argument and check if hit any ships
  const hitResult = board.makeHit(square.dataset.x, square.dataset.y);

  if (hitResult !== null) {
    event.target.innerText = hitResult;
    event.target.classList.add("box-hit");
    // console.log(board.numRemaining);

    isGameOver();
  } else {
    event.target.classList.add("box-miss");
  }
};

// Helper function to determine if game over.
const isGameOver = () => {
  if (board.isGameOver()) {
    // grab all grid cells and remove their event listeners when game is over
    const gridSquares = document.querySelectorAll(".box");
    gridSquares.forEach((square) => {
      square.removeEventListener("click", checkHit);
    });

    gameOverMessage();
  }
};

// Display game over message.
const gameOverMessage = () => {
  // create new h2 element with the message
  const h2Element = document.createElement("h2");
  h2Element.innerText = "YOU WIN!!!";

  // remove first the reset button from the body before appending h2 element
  divElement.removeChild(resetButton);
  divElement.appendChild(h2Element);
};

// Reset button even handler
const resetGame = () => {
  // grab the current "main" section element from the document and remove it before initializing the game.
  const mainSection = document.getElementById("main");
  document.body.removeChild(mainSection);

  initializeGame();
};

const divElement = document.createElement("div");
document.body.appendChild(divElement);
const resetButton = document.createElement("button");
resetButton.setAttribute("id", "reset-button");
resetButton.textContent = "Reset Game";
divElement.appendChild(resetButton);

resetButton.addEventListener("click", resetGame);

initializeGame();
