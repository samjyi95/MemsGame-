function flipCard(card) {
	// console.log("User has flipped " + cards[cardId].rank);
	// //function above is accessing cards array with the key ref of "rank Id"
	// console.log("User has flipped " + cards[cardId].suit);
	// console.log("User has flipped " + cards[cardId].cardImage);
	console.log('THIS', card);
	let cardId = card.getAttribute('data-id')
	cardsInPlay.push(cards[cardId].rank)
	checkForMatch();
	card.setAttribute('src', cards[cardId].cardImage)	
}

function checkForMatch() {
	if (cardsInPlay.length >= 2 ) {
		if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again.");
		}
	}
}

function createBoard() {
	for (let i = 0; i < cards.length; i++) {
		board[i] = cards[i];
	}
}

function createCards() {
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', function() {
			flipCard(cardElement);
		});
		document.getElementById('game-board').appendChild(cardElement);
	}
}

const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png",
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png",
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];
var board = [];
var cardsInPlay = [];
createBoard();
createCards();