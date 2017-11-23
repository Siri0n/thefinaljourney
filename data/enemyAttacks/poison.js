module.exports = [
	{
		id: "poison_1",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Волшебный аромат",
		diagram: {
			"DEF": "{attack m 1}"
		},
		text: "{defence p 1 big}{defence m 1 big}{onhit}обездвиживание (1 ход)",
		footer: "Яд",
		corner: "I"
	},
	{
		id: "poison_2",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Ядовитые клыки",
		diagram: {
			">AD": "{attack p 1}",
			">CF": "{attack p 1}"
		},
		text: "{defence p 1 big}{onhit}{attack p 2 big}",
		footer: "Яд",
		corner: "II"
	},
	{
		id: "poison_3",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Отравление",
		diagram: {
			"DF": "{attack p 1}",

		},
		text: "Игнорирует блок {onhit} потеря жизни",
		footer: "Яд",
		corner: "III"
	},
]