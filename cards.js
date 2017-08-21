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
		number: "3"
	},
	{
		id: 4,
		type: "example",
		name: "Дихотомия Эскабара",
		text: "{attack m 1}{or}{attack p 1}",
		border: "example.jpg",
		footer: "Пример",
		number: "4"
	},
	{
		id: 5,
		type: "enemyAttack",
		name: "Дёрнуть анус",
		diagram: {
			"ABC": "{attack p 1}",
			">DEF": "{attack m 2}{attack p 2}"
		},
		text: "+1 морального урона против самого игрока",
		footer: "Анальное угнетение",
		number: "I"
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