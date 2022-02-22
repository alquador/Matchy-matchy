//querySelector to be able to access game componenets   
const gameCards = document.querySelectorAll('.game-card');
const playAgain = document.querySelector('#play-again')
const movesMade = document.querySelector('.moves-made')
const gameTimer = document.querySelector('.timer')
const wonderWoman0 = document.querySelector('#ww1')
const wonderWoman1 = document.querySelector('#ww2')
const thor2 = document.querySelector('#thor1')
const thor3 = document.querySelector('#thor2')
const iron4 = document.querySelector('#iron1')
const iron5 = document.querySelector('#iron2')
const hulk6 = document.querySelector('#hulk1')
const hulk7 = document.querySelector('#hulk2')
const captainAmerica8 = document.querySelector('#cap1')
const captainAmerica9 = document.querySelector('#cap2')
const blackWidow10 = document.querySelector('#bw1')
const blackWidow11 = document.querySelector('#bw2')
const blackPanther12 = document.querySelector('#bp1')
const blackPanther13 = document.querySelector('#bp2')
const avengers14 = document.querySelector('#avenge1')
const avengers15 = document.querySelector('#avenge2')

//make an array of the card choices...may help with shuffling them for each new game
const cardChoices = [wonderWoman0, wonderWoman1, thor2, thor3, iron4, iron5, hulk6, hulk7,
    captainAmerica8, captainAmerica9, blackWidow10, blackWidow11, blackPanther12, blackPanther13,
    avengers14, avengers15]

//Flip card to reveal the character image
function flipCard() {
  this.classList.toggle('flip')
}


//Randomize where the cards are on the game board each time the game is played
//...try accessing through const gameCards
//Need this to happen every time the game is reset... maybe attach to play again button
//Maybe math.floor(math.random) to connect and change array index value
const shuffleCards = () => {
  gameCards.forEach(shuffleIndexOrder => {
  let shuffle = Math.floor(Math.random() * 16)
  shuffleIndexOrder.style.order = shuffle
  })
}
shuffleCards()

//function to check for card match
//if there is a match made... need to make the revealed image stay in the revealed state
//if no match the card needs to toggle back to the back of the card
//const cardMatchCheck  = () => {
  //if (card === card)
//}
const checkForMatch = () => {
  let matches = 0
  for (let i = 0; i <= cardChoices.length; i++) {
  if (wonderWoman0 === wonderWoman1) {
    console.log('match')
  } if (thor2 === thor3) {
    console.log('match')
  } if (iron4 === iron5) {
    console.log('match')
  } if (hulk6 === hulk7) {
    console.log('match')
  } if (captainAmerica8 === captainAmerica9) {
    console.log('match')
  } if (blackWidow10 === blackWidow11) {
    console.log('match')
  } if (blackPanther12 === blackPanther13) {
    console.log('match')
  } if (avengers14 === avengers15) {
    console.log('match')
  } else if (cardchoices = cardChoices) {
    console.log('game won!')
  }
}
}



//function to flip cards back if there is not a match... back to the unrevealed state


//function to evaluate if the board has all matches revealed
//attach to play again button? Maybe...
const clearGame = () => {
  window.location.reload()
}

//Attach a click counter to account for how many "Moves Made" will populate
//NOT WORKING...plus I want the count to count 1 for every 2 clicks
let clicks = 0
movesMade.innerHTML = ""
const clickCounter = () => {
  movesMade.innerHTML = "Moves made: " + clicks++
  clicks++
}
clickCounter()
//Attach a start and stop timer to clock how long it takes to sucessfully complete the game
//setInterval or setTimeout
//there are 1,000 milliseconds in 1 second
let seconds = 0
let minutes = 0
let time = ""
let timeStart = false
const startTimer = () => {
  time = setInterval(function() {
    seconds++
    if(seconds === 60) {
      minutes++
      seconds = 0
    }
    gameTimer.innerHTML = "Timer: " + minutes + " minutes " + seconds + " seconds "
  }, 1000)
}
startTimer()
//console.log(startTimer())
const stopTimer = () => {
  clearInterval(time)
}
//create a function that stops time and moves on the game board once the game is won
//if (matched.length === 16)
const gameWon = () => { 
  //invoke the stopTimer function to stop the time
  //stopTimer()
  //reset moves to 0
  //moves = 0 
}


gameCards.forEach(card => card.addEventListener('click', flipCard))

document.addEventListener('DOMContentLoaded', () => {
  playAgain.addEventListener('click', clearGame)
  //clickCounter.addEventListener('click', movesMade)
})