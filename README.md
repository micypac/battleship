# Battleship

In this practice, I created a UI using HTML elements for a basic
implementation of a single-player [Battleship][battleship] game!

## Set Up

run `node app.js`

## Background and Context

See details of the [Battleship][battleship] game here if you are not familiar
with the game.

The goal of this practice is to have a Battleship game board displayed on the
browser which a user can interact with to find and destroy ships by guessing
their coordinates on the board. Once all the ships are found, the user wins and
the game is over!

You can view the page by starting the server in **app.js** by running `node app.js`
and navigate to [http://localhost:5001] in the browser.

## Phase 1: Board

Create an HTML structure using JavaScript that can be positioned using CSS to
visually represent the layout of the Battleship game board. Add your CSS to the
**assets/css/index.css** file to make each cell in the board a square. Each
cell in the `grid` should be represented by a square. You should link that
square HTML element with the cell in the `grid` by storing the data about the
row and the column of the cell on the HTML element.

Tweak with your CSS to get the layout to look something like this:

![layout-example]

### Clicking a Square

Next, when a user clicks a square, the game should be updated and the user
should see some visual indication that they've hit a ship or missed. When the
square is clicked, you should call the `.makeHit(row, col)` method on the
`board` passing in the `row` and the `col`umn that the square is on to update
the game.

Hint: To get the `row` and `col` of the square, read the data you saved on the
square when creating the square.

The `.makeHit(row, col)` method will return the value of the `grid` at that
`row` and `col` after updating the game. If the value is `null`, then the user
has missed and the square should turn red. If the value is a number, then add
that number as text to the square and turn the square green.

Hint: To change the color of the clicked square, add CSS class(es).

Add more to your CSS so that the clicked squares will look something like this:

![board-example]

## Phase 2: Game Over Message

Now that the user can interact with the UI, now you have to figure out when the
game is over, or else your user will just be left hanging. Recall that your
`Board` object should be keeping track of how many squares are still remaining.
Whenever a square results in a hit, the board should be updated, and then
checked to see if the game is over.

If the game is over, the board should be locked out, and a message should
appear, notifying the user they've completed the game. The `.isGameOver()`
method on the `board` will return `true` if the game is over and `false` if
there are still ships left to hit. **Important Note:** This method will not work
if you haven't been updating the game state properly by calling the
`.makeHit(row, col)` method on the `board` in Phase 1.

Whenever a square is clicked, you should check to see if the game is over. If
the game is over, you should make sure that none of the squares are clickable
and a game over message right above the game board should appear letting the
user know that they have won. It should look something like this:

![game-over-message-example]

## Phase 3: Reset Button

The only thing left to do is implement the reset button so the user can start a
new game whenever the reset button is clicked.

When the reset button is clicked, the `board` should be initialized again to
create a new `grid` and all the squares on the page should be reset to reflect
the state of the new `grid`. The game over message should also be reset to show
no message.

The user should be able to click the reset button to reset the game regardless
of if the game is over.

Here's what it should look like **before** the reset button is clicked:

![before-reset-example]

Here's what it should look like **after** the reset button is clicked:

![after-reset-example]

By the end of this phase, you should have a barebones version of a single
player Battleship running! If you have time, continue on to the bonus section.

[starter]: https://github.com/appacademy/practice-for-week-09-battleship-dom
[battleship]: http://en.wikipedia.org/wiki/Battleship_%28game%29
[layout-example]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-09/practice-battleship-dom/battleship-layout.png
[board-example]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-09/practice-battleship-dom/battleship-board.png
[game-over-message-example]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-09/practice-battleship-dom/battleship-game-over-message.png
[before-reset-example]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-09/practice-battleship-dom/battleship-before-reset.png
[after-reset-example]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-09/practice-battleship-dom/battleship-after-reset.png
