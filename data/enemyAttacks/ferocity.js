module.exports = [
	{
		id: "ferocity_1",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Укус за бочок",
		diagram: {
			"BCF": "{attack p 1}"
		},
		text: "+ {health 1} за каждую единицу урона, нанесённого игрокам",
		footer: "Зверство",
		corner: "I"
	},
	{
		id: "ferocity_2",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Выцарапывание глаз",
		diagram: {
			"BAD": "{attack p 1}"
		},
		text: "{defence p 1 big}{onhit} Слепота (2 хода)",
		footer: "Зверство",
		corner: "II"
	},
	{
		id: "ferocity_3",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Пожирание",
		diagram: {
			">BE": "{attack p 3}",
		},
		text: "{defence u 1 big}{br}+ {health 1} за каждую единицу урона, нанесённого игрокам",
		footer: "Зверство",
		corner: "III"
	},
]