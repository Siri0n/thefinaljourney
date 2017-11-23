module.exports = [
	{
		id: "flame_1",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Искры",
		diagram: {
			"BDF": "{attack m 1}"
		},
		text: "{defence m 1 big}",
		footer: "Пламя",
		corner: "I"
	},
	{
		id: "flame_2",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Шар огня",
		diagram: {
			"ACE": "{attack m 1}",
			"B": "{attack m 2}"
		},
		text: "{defence m 1 big}",
		footer: "Пламя",
		corner: "II"
	},
	{
		id: "flame_3",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Огненный шторм",
		diagram: {
			">DA": "{attack m 2}",
			">EB": "{attack m 2}",
			">FC": "{attack m 2}"
		},
		text: "{defence m 2 big}",
		footer: "Пламя",
		corner: "III"
	},
]