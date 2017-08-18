var cards = [
	{
		id: 1,
		type: "example",
		name: "Пример карты",
		text: "Наносит {attack p 2} охуевшему от ужаса монстру.",
		border: "example.jpg",
		footer: "Пример",
		number: "1"
	}
]

var final = {};

cards.forEach(card => {
	var id = card.id;
	if(final[id]){
		throw new Error("Card id collision detected: " + id);
	}
	final[id] = card;
})

module.exports = final;