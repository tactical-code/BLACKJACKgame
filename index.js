/* player obj */
let player = {
  Name: "user",
  Chips: 145
}
let cards = []
let sum = 0
let hasblackjack = false
let isAlive = true
let message = ""

let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector("#sum-el")
let cardEl = document.querySelector("#cards-el")

/* player data display */
let playerEl = document.getElementById("player-el")


function startGame() {
  isAlive = true
  hasblackjack = false
  cards = []
  sum = 0
  let firstcard = GetRandomCards()
  let secondcard = GetRandomCards()
  cards = [firstcard,secondcard]
  sum = firstcard + secondcard
  renderGame()
}

function GetRandomCards(){
  let randomnumber = Math.floor( Math.random() * 13) + 1
  if (randomnumber > 10){
    return 10
  }
  else if (randomnumber == 1){
    return 11
  }
  else{
    return randomnumber
  }
}

function renderGame() {
  playerEl.textContent = player.Name + ": $" + player.Chips
  
  cardEl.textContent = "Cards: " 
  for(let count=0; count < cards.length; count++){
    cardEl.textContent += cards[count] + " " + "|"
  }

  sumEl.textContent = "sum: " + sum

  if (sum<=20) {
    message = "DO you want to draw a new card? 💵+ 20" //directly updating here doesnt work
    player.Chips += 20
  } else if (sum===21){
    message = "congrats you win 💵💵!"
    hasblackjack = true
    player.Chips *= 2
  } else {
    message = "Your lost :( -100"
    isAlive = false
    player.Chips -= 100
  }
  playerEl.textContent = player.Name + ": $" + player.Chips;
  /* console.log(message)
  console.log(isAlive)
  console.log(hasblackjack) */
  messageEl.textContent = message

}

function newCard() {
  if (isAlive == true && hasblackjack == false) {
    let newcard = GetRandomCards()
    sum += newcard
    cards.push(newcard)
    renderGame()
  }
  
}

