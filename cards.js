var cards = [
	{
		id: 1,
		type: "example",
		name: "Яростноя отака",
		text: "Наносит {attack p 2} охуевшему от ужаса монстру.",
		border: "example.jpg",
		footer: "Пример",
		number: "1"
	},
	{
		id: 2,
		type: "example",
		name: "Сильное колдунство",
		text: "Наносит {attack m 2} монстру, деморализуя его к ебеням.",
		border: "example.jpg",
		footer: "Пример",
		number: "2"
	},
	{
		id: 3,
		type: "example",
		name: "Ональное агораживание",
		text: "Даёт игроку {defence p 1}{defence m 1}{defence u 1}, дабы монстр не смог добраться до его ануса.",
		border: "example.jpg",
		footer: "Пример",
		number: "2"
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