let firstCard= 0;
let secondCard= 0;
let cards = [0];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message= " ";
let player = {
    name: "Mercy",
    chips: 100
}


let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("card-el");
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;
console.log(playerEl);

function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10;

    } else if (randomNumber === 1) {
        return 11;
        
    } else {
        return randomNumber;
    }
    
} 


function startGame() {
    firstCard = getRandomNumber();
    secondCard = getRandomNumber();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    commenceGame();
    
}

function commenceGame() {
    cardEl.textContent = "Card:"
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " ";
    }

    if (sum < 21) {
        message = "Do you want to draw another card?";

    } else if (sum === 21) {
        message = "You've got blackjack!";
        hasBlackjack = true;

    } else {
        message = "You're out of the game";
        isAlive = false;
    }
    
    messageEl.textContent = message;
    sumEl.textContent = "Sum:" + sum;
    
   
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let thirdCard  = getRandomNumber();
        cards.push(thirdCard);
        sum += thirdCard;
        commenceGame(); 
    }
    
    
    
}