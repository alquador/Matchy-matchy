//querySelector to be able to access game componenets   
const gameCards = document.querySelectorAll('.game-card');
const playAgain = document.querySelector('#play-again')
const movesMade = document.querySelector('.moves-made')
const gameTimer = document.querySelector('.timer')
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

//set an empty array where matched cards are pushed into this array
let matchedCards = []

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
 if (playerChoice[0].id !== playerChoice[1].id) {
   //this.classList.add('flip')
   //reverseFlip()
   //reverseFlip(playerChoice)
   playerChoice[0].classList.remove('flip')
   console.log(playerChoice[0])
   console.log(playerChoice[1])
   //this.classList.remove('flip')
  console.log("Not a match, try again!")
 } if (playerChoice[0].id === playerChoice[1].id) {
   //matchedCards.push(firstFlip)
   //console.log(matchedCards)
  //firstFlip.classList.remove('flip')
  //secondFlip.classList.remove('flip')
   //stopFlip()
    //firstFlip.removeEventListener('click', flipCard())
    //secondFlip.removeEventListener('click', flipCard())
  //gameCards.forEach(card => card.removeEventListener('click', flipCard))//-locks the whole board!
  //gameCards.removeEventListener()
  //stone card... can not toggle back
  //reverseFlip()
 console.log("Match made!")
} 
//flipCard()
playerChoice = []
}

const clearGame = () => { 
  window.location.reload()
}

//Attach a click counter to account for how many "Moves Made" will populate
let clicks = 0
let moves = 0
movesMade.innerHTML = "Moves made: " + moves
const clickCounter = () => { 
  clicks++
  //console.log(clicks)
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
    movesMade.innerHTML = "Moves made: " + moves
    clicks = 0
  }
  if (playerChoice.length < 2) {
    playerChoice.push(event.target)
    console.log(playerChoice)
  // if there are two items in playerChoice array time to checkFor Match
  } if (playerChoice.length === 2) {
    checkForMatch()
    console.log(playerChoice)
  } //else if (playerChoice.length > 2) {
    //playerChoice = []
  //}
  }
  

//function stopFlip (event) {
  //if (playerChoice[0] === playerChoice[1])
  //firstFlip.removeEventListener('click', flipCard)
  //secondFlip.removeEventListener('click', flipCard)
//}

gameCards.forEach(card => card.addEventListener('click', flipCard))
//gameCards.forEach(card => card.addEventListener('click', stopFlip))

document.addEventListener('DOMContentLoaded', () => {
  playAgain.addEventListener('click', clearGame)
  movesMade.addEventListener('click', clickCounter)
  //stopFlip()
})

//If I can complete everything I want... maybe add a completion song
//Add matches made under moves made

//create a function that stops time and moves on the game board once the game is won
//if (matched.length === 16)
//const gameWon = () => { 
  //invoke the stopTimer function to stop the time
  //stopTimer()
  //reset moves to 0
  //moves = 0 