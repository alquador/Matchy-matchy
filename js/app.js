//querySelector to be able to access game componenets   
const gameCards = document.querySelectorAll('.game-card');
const playAgain = document.querySelector('#play-again')
const movesMade = document.querySelector('.moves-made')
const gameTimer = document.querySelector('.timer')
const gameMatch = document.querySelector('.game-match')
const wonderWoman0 = document.querySelector('#ww1')
const wonderWoman1 = document.querySelector('#ww1')
const thor2 = document.querySelector('#thor1')
const thor3 = document.querySelector('#thor1')
const iron4 = document.querySelector('#iron1')
const iron5 = document.querySelector('#iron1')
const hulk6 = document.querySelector('#hulk1')
const hulk7 = document.querySelector('#hulk1')
const captainAmerica8 = document.querySelector('#cap1')
const captainAmerica9 = document.querySelector('#cap1')
const blackWidow10 = document.querySelector('#bw1')
const blackWidow11 = document.querySelector('#bw1')
const blackPanther12 = document.querySelector('#bp1')
const blackPanther13 = document.querySelector('#bp1')
const avengers14 = document.querySelector('#avenge1')
const avengers15 = document.querySelector('#avenge1')

//make an array of the card choices...may help with shuffling them for each new game
const cardChoices = [wonderWoman0, wonderWoman1, thor2, thor3, iron4, iron5, hulk6, hulk7,
    captainAmerica8, captainAmerica9, blackWidow10, blackWidow11, blackPanther12, blackPanther13,
    avengers14, avengers15]

//set an empty array to push carch choices into, then check for match by index
let playerChoice = []

let matches = 0
const gameWon = () => {
  if (matches.length === 8) {
    stopTimer()
    console.log("Game Won!")
  }
}


//Randomize where the cards are on the game board each time the game is played
const shuffleCards = () => {
  gameCards.forEach(shuffleIndexOrder => {
  let shuffle = Math.floor(Math.random() * 16)
  shuffleIndexOrder.style.order = shuffle
  })
}
shuffleCards()

//after there is a match I want to remove the event listener or 'flip' to matched cards
//to disable cards from being reflipped
//if there is no match between the two cards they need to flip back
const checkForMatch = () => {
    console.log(playerChoice[0])
    console.log(playerChoice[1])
    //console.log("we have entered the timeout")
 if (playerChoice[0].id !== playerChoice[1].id) {
  setTimeout(flipUnmatched, 1000, playerChoice[0], playerChoice[1])
  console.log("Not a match, try again!")
   }
  if (playerChoice[0].id === playerChoice[1].id) {
    matches += 1
    gameMatch.innerHTML = "Matches: " + matches + "/8"
    gameWon()
    //console.log(matches)
    //console.log("Match made!")
} 
playerChoice = []
}

const flipUnmatched = (card1, card2) => {
  console.log("inside flipUnmatched")
  card1.parentElement.classList.remove('flip')
  card2.parentElement.classList.remove('flip')
  
}

const clearGame = () => { 
  window.location.reload()
}

//Attach a start and stop timer to clock how long it takes to sucessfully complete the game
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

//Need to invoke stop timer once all matches are made...
const stopTimer = () => {
  clearInterval(time)
}

//Attach a click counter to account for how many "Moves Made" will populate
let clicks = 0
let moves = 0
const clickCounter = () => { 
  clicks++
  //console.log(clicks)
}

//Flip card to reveal the character image
let firstFlip = playerChoice[0]
let secondFlip = playerChoice[1]

function flipCard (event) {
  this.classList.add('flip')
  console.log(this.classList)
  if (clicks < 1) {
  let firstFlip = event.target.id
  console.log(firstFlip)
  //console.log(playerChoice.length)
  }
  clickCounter()
  if (clicks === 2) {
    let secondFlip = event.target.id
    console.log(secondFlip)
    //console.log(playerChoice)
    moves++
    //movesMade.innerHTML = "Moves made: " + moves
    clicks = 0
  }
  if (playerChoice.length < 2) {
    playerChoice.push(event.target)
    console.log(playerChoice)
  // if there are two items in playerChoice array time to checkFor Match
  } if (playerChoice.length === 2) {
    checkForMatch()
    console.log(playerChoice)
  } 
  }


document.addEventListener('DOMContentLoaded', () => {
  playAgain.addEventListener('click', clearGame)
  movesMade.addEventListener('click', clickCounter)
  gameCards.forEach(card => card.addEventListener('click', flipCard))
  gameWon()
})

//If I can complete everything I want... maybe add a completion song
//Add matches made under moves made

//create a function that stops time and moves on the game board once the game is won
//if (matched.length === 16)
//const gameWon = () => { 
  //invoke the stopTimer function to stop the time
  //stopTimer()
  //reset moves to 0
  