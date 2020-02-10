function flipCard(cardId) {
	console.log("User has flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId])
	checkForMatch();	
}

function checkForMatch() {
	if (cardsInPlay.length >= 2 ) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			console.log("You found a match!");
		} else {
			console.log("Sorry, try again.");
		}
	}
}
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
flipCard(0);
flipCard(2);
