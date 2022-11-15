import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// square event listener callback function
const checkHit = (event) => {
  const square = event.target;
  // call board method with square coordinates as argument and check if hit any ships
  const hitResult = board.makeHit(square.dataset.x, square.dataset.y);

  if (hitResult !== null) {
    event.target.innerText = hitResult;
    event.target.classList.add("box-hit");
    console.log(board.numRemaining);

    isGameOver();
  } else {
    event.target.classList.add("box-miss");
  }
};

const isGameOver = () => {
  if (board.isGameOver()) {
    const gridSquares = document.querySelectorAll(".box");
    gridSquares.forEach((square) => {
      square.removeEventListener("click", checkHit);
    });

    h2Element.style.visibility = "visible";
  }
};

const h2Element = document.createElement("h2");
h2Element.innerText = "YOU WIN!!!";
h2Element.style.visibility = "hidden";
document.body.appendChild(h2Element);
const mainSection = document.createElement("section");
mainSection.classList.add("main-section");
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
