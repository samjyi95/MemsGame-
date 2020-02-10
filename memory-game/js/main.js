function flipCard(cardId) {
	console.log("User has flipped " + cards[cardId].rank);
	//function above is accessing cards array with the key ref of "rank Id"
	console.log("User has flipped " + cards[cardId].suit);
	console.log("User has flipped " + cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank)
	// step 3, not sure if I did that one right, we'll see.
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
var cardsInPlay = [];
flipCard(0);
flipCard(2);
