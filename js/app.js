console.log('Hello frontend')
// Global Variables Here
let score = 0
let tickWins = document.querySelector(`.tick-wins`).innerHTML
let toeWins = document.querySelector(`.toe-wins`).innerHTML
let gameActive = false
let currentPlayer = `x`
let gameState = [``, ``, ``, ``, ``, ``, ``, ``, ``]
const xBoard = [
  document.querySelector(`.tick1`),
  document.querySelector(`.tick2`),
  document.querySelector(`.tick3`),
  document.querySelector(`.tick4`),
  document.querySelector(`.tick5`),
  document.querySelector(`.tick6`),
  document.querySelector(`.tick7`),
  document.querySelector(`.tick8`),
  document.querySelector(`.tick9`)
]
let xImage = [
  document.querySelector(`#tick1`).style.opacity,
  document.querySelector(`#tick2`).style.opacity,
  document.querySelector(`#tick3`).style.opacity,
  document.querySelector(`#tick4`).style,
  document.querySelector(`#tick5`).style.opacity,
  document.querySelector(`#tick6`).style.opacity,
  document.querySelector(`#tick7`).style.opacity,
  document.querySelector(`#tick8`).style.opacity,
  document.querySelector(`#tick9`).style.opacity
]
const oBoard = [
  document.querySelector(`.toe1`),
  document.querySelector(`.toe2`),
  document.querySelector(`.toe3`),
  document.querySelector(`.toe4`),
  document.querySelector(`.toe5`),
  document.querySelector(`.toe6`),
  document.querySelector(`.toe7`),
  document.querySelector(`.toe8`),
  document.querySelector(`.toe9`)
]
const oImage = [
  document.querySelector(`#toe1`),
  document.querySelector(`#toe2`),
  document.querySelector(`#toe3`),
  document.querySelector(`#toe4`),
  document.querySelector(`#toe5`),
  document.querySelector(`#toe6`),
  document.querySelector(`#toe7`),
  document.querySelector(`#toe8`),
  document.querySelector(`#toe9`)
]
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
console.log(xImage[3])
////////////////////////////////
// Functions For Game Logic Here

////////////////////////////////
// Event Listeners Here

////////////////////////////////
