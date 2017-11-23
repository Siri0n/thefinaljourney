module.exports = [
	{
		id: "brawl_1",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Тычок",
		diagram: {
			">BE": "{attack p 2}"
		},
		text: "{defence p 1 big}",
		footer: "Драка",
		corner: "I"
	},
	{
		id: "brawl_2",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Град ударов",
		diagram: {
			"AC" : "{attack p 1}"
		},
		text: "{defence p 2 big}",
		footer: "Драка",
		corner: "II"
	},
	{
		id: "brawl_3",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Удар с разворота",
		diagram: {
			">ABC": "{attack p 3}"
		},
		text: "{defence u 1 big}",
		footer: "Драка",
		corner: "III"
	},
]