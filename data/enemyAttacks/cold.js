module.exports = [
	{
		id: "cold_1",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Сосулька",
		diagram: {
			">BE": "{attack p 2}{attack m 1}"
		},
		text: "{defence m 1 big}",
		footer: "Холод",
		corner: "I"
	},
	{
		id: "cold_2",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Ледяная броня",
		diagram: {
			"ABC": "{attack m 1}"
		},
		text: "Весь урон, получаемый в этот ход, уменьшается на 1.",
		footer: "Холод",
		corner: "II"
	},
	{
		id: "cold_3",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Дыхание вьюги",
		diagram: {
			">DA": "{attack m 1}",
			">FC": "{attack m 1}",
			">BE": "{attack p 1}{attack m 1}"
		},
		text: "{defence p 1 big}{defence m 1 big}{onhit}Слепота (1 ход)",
		footer: "Холод",
		corner: "III"
	},
]