module.exports = [
	{
		id: "shooting_1",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Метательные ножи",
		diagram: {
			"DEF": "{attack p 1}"
		},
		text: "Уклонение: монстр игнорирует первую атаку в этот ход",
		footer: "Стрельба",
		corner: "I"
	},
	{
		id: "shooting_2",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Огненная стрела",
		diagram: {
			">CF": "{attack p 2}{attack m 1}"
		},
		text: "Уклонение: монстр игнорирует первую атаку в этот ход",
		footer: "Стрельба",
		corner: "II"
	},
	{
		id: "shooting_3",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Стрела в колено",
		diagram: {
			">AD": "{attack p 3}",

		},
		text: "Уклонение {onhit} обездвиживание (1 ход)",
		footer: "Стрельба",
		corner: "III"
	},
]