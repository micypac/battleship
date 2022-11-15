import Board from "./board.js";

let board = new Board(); // creates a new game board

// Examine the grid of the game board in the browser console.
// Create the UI of the game using HTML elements based on this grid.
console.log(board.grid);

// Your code here
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

    square.addEventListener("click", (event) => {
      const hitResult = board.makeHit(
        event.target.dataset.x,
        event.target.dataset.y
      );
      // console.log(hitResult);

      if (hitResult !== null) {
        event.target.innerText = hitResult;
        event.target.classList.add("box-hit");
      } else {
        event.target.classList.add("box-miss");
      }
    });
  }
}
