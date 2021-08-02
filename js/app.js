// Global Variables Here
const gameStart = document.querySelector(`h3`)
const start = document.body.getElementsByTagName('start')[0]
let tickWins = document.querySelector(`.tick-wins`).innerHTML
let toeWins = document.querySelector(`.toe-wins`).innerHTML
let gameActive = null
let x = []
let o = []
let draws = []
let currentPlayer = x
let playCount = []
let oPositions = []
let xPositions = []
let cells = document.getElementsByClassName(`cells`)
let positionMatch = 0
let newSec = document.createElement(`section`)
let script = document.querySelector(`script`)

const winCombos = [
  [0, 1, 2], // winning rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // winning columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], //winning diagonals
  [2, 4, 6]
]

////////////////////////////////

// Functions For Game Logic Here

const startGame = function () {
  document.body.removeChild(start)
  gameActive = true
}

// Board Reset
let reset = function () {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = ''
  }
}

// End Check Functions
let drawCheck = function () {
  if (playCount.length === 9) {
    draws.push(+1)
    gameActive = false
    reset()
  }
}
let winCheck = function (positionArray) {
  for (let i1 = 0; i1 < 8; i1++) {
    positionMatch = 0
    for (let i2 = 0; i2 < 3; i2++) {
      if (positionArray.indexOf(winCombos.slice()[i1][i2]) > -1) {
        positionMatch = positionMatch + 1
      }
      if (positionMatch === 3) {
        currentPlayer.push(+1)
        gameActive = false
        reset()
      } else drawCheck()
    }
  }
}

// Board Click Functions

let replayClick = function () {
  document.body.addEventListener(`click`, function () {
    return (gameActive = true)
  })
}
let addEndScreen = function () {
  newSec.innerHTML = `<div class="winner">
  <h3 class="win">Winner!</h3>
  <p class="replay">replay</p>
  </div>`
  newSec.className = `win-message`
  document.body.insertBefore(newSec, script)

  replayClick()
  document.body.removeChild(`.win-message`)
  gameActive = true
}

// Event Listeners Here
gameStart.addEventListener('click', startGame())

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function (event) {
    if (currentPlayer === x) {
      event.target.innerHTML = `<img class='tick-sb' src='./images/tick.png' alt='tick'></div>`
      xPositions.push(i)
      playCount.push(``)
      winCheck(xPositions)
      currentPlayer = o
    } else if (currentPlayer === o) {
      event.target.innerHTML = `<img class='toe-sb' src='./images/big-toe.png' alt='toe'>`
      oPositions.push(i)
      playCount.push(``)
      winCheck(oPositions)
      currentPlayer = x
    }
  })
}

if (gameActive === false) {
  addEndScreen()
}
if (gameActive !== null) {
  console.log(`wow`)
}

////////////////////////////////
////////////////////////////////
