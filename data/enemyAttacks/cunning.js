module.exports = [
	{
		id: "cunning_1",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Подсечка",
		diagram: {
			">CBA": "{attack p 2}"
		},
		text: "{onhit} игрок теряет карту",
		footer: "Коварство",
		corner: "I"
	},
	{
		id: "cunning_2",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Подлый захват",
		text: `{defence p 2 big}{defence m 2 big}{br}{br}
		За каждую единицу заблокированного урона нанёсший его получает единицу ответного урона того же типа`,
		footer: "Коварство",
		corner: "II"
	},
	{
		id: "cunning_3",
		type: "enemyAttack",
		background: "png/enemyAttack.png",
		name: "Удар ниже пояса",
		diagram: {
			">BE": "{attack p 3}"
		},
		text: "{onhit} оглушение на 1 ход",
		footer: "Коварство",
		corner: "III"
	},
]