// Global Variables Here
let start = document.getElementsByTagName('start')[0]
let winner = document.getElementsByTagName('winner')[0]
let draw = document.getElementsByTagName('draw')[0]
let gameActive = null
let x = 0
let xCount = document.querySelector(`.tick-wins`)
let o = 0
let oCount = document.querySelector(`.toe-wins`)
let draws = 0
let drawCount = document.querySelector(`.draw-count`)
let currentPlayer = 'x'
let playCount = []
let oPositions = []
let xPositions = []
let cells = document.getElementsByClassName(`cells`)
let positionMatch = 0
let newSec = document.createElement(`winner`)
let script = document.querySelector(`script`)
const gameStart = document.querySelector(`h3`)
const winCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

////////////////////////////////

// Functions For Game Logic Here

// Current Player Display Switch
function tally() {
  xCount.innerHTML = x
  oCount.innerHTML = o
  drawCount.innerHTML = draws
}
tally()

function playerSwitch() {
  if (currentPlayer === 'x') {
    document.querySelector('p').innerText = 'Ticks Turn'
  } else document.querySelector('p').innerText = 'Toes Turn'
}

// Game Start
const startGame = function (text) {
  text.style.display = `none`
  gameActive = true
  currentPlayer = 'x'
  playerSwitch()
  tally()
}

// Board Reset
let reset = function () {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = ''
  }
}

// Player Switch
let switches = function (check) {
  if (check === xPositions) {
    currentPlayer = 'o'
    playerSwitch()
    positionMatch = 0
  } else if (check === oPositions) {
    currentPlayer = 'x'
    playerSwitch()
    positionMatch = 0
  }
}

// End Check Functions
let addEndScreen = function (text) {
  reset()
  playCount = []
  oPositions = []
  xPositions = []
  text.style.display = `grid`
}
// Draw Check
let drawCheck = function () {
  if (playCount.length === 9 && positionMatch === 3) {
    draws = draws + 1
    gameActive = false
    addEndScreen(draw)
  }
}
// Win Check
let winCheck = function (positionArray) {
  for (let i1 = 0; i1 < 8; i1++) {
    positionMatch = 0
    for (let i2 = 0; i2 < 3; i2++) {
      if (positionArray.indexOf(winCombos.slice()[i1][i2]) > -1) {
        positionMatch = positionMatch + 1
      }
      if (positionMatch > 2) {
        if (currentPlayer === 'x' && xPositions.length > oPositions.length) {
          x = x + 1
          console.log(positionMatch)
        } else if ((currentPlayer = 'o')) {
          o = o + 1
        }
        gameActive = false
        addEndScreen(winner)
      }
    }
  }
  positionMatch = 0
  switches(positionArray)
  if (playCount.length === 9 && positionMatch === 0) {
    draws = draws + 1
    gameActive = false
    addEndScreen(draw)
  }
}

// Board Click Functions
let xClick = function (i) {
  event.target.innerHTML = `<img class='tick-sb' src='./images/tick.png' alt='tick'></div>`
  xPositions.push(i)
  playCount.push(i)
  winCheck(xPositions)
}
let oClick = function (i) {
  event.target.innerHTML = `<img class='toe-sb' src='./images/big-toe.png' alt='toe'>`
  oPositions.push(i)
  playCount.push(i)
  winCheck(oPositions)
}

// Event Listeners Here
gameStart.addEventListener('click', function () {
  startGame(start)
})
document.getElementById(`win`).addEventListener('click', function () {
  startGame(winner)
})
document.getElementById(`draw`).addEventListener('click', function () {
  startGame(draw)
})

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', function (event) {
    if (currentPlayer === 'x' && playCount.indexOf(i) === -1) {
      xClick(i)
    } else if (currentPlayer === 'o' && playCount.indexOf(i) === -1) {
      oClick(i)
    }
  })
}
////////////////////////////////
////////////////////////////////
