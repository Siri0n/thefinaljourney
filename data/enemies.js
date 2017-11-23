module.exports = [
	{
		id: "enemy_1",
		type: "enemy",
		background: "png/enemy.png",
		image: "enemies/scarecrow.png",
		name: "Соломенный элементаль",
		skills: "Коварство I, Пламя II, Драка III",
		health: "20",
		text: "- {health 1} при использовании карт Пламени.",
		footer: "Элементаль",
		corner: "I"
	},
	{
		id: "enemy_2",
		type: "enemy",
		background: "png/enemy.png",
		image: "enemies/cactus.png",
		name: "Кактус эректус",
		skills: "Яд I, Стрельба II, Драка III",
		health: "25",
		text: "Град иголок. Сыграв карту Стрельбы, следующим ходом играет её же второй раз.",
		footer: "Растение",
		corner: "I"
	},
	{
		id: "enemy_3",
		type: "enemy",
		background: "png/enemy.png",
		image: "enemies/slime.png",
		name: "Скользкий слизень",
		skills: "Холод II, Коварство II, Драка II",
		health: "18",
		text: "Скользкая слизь. Сыграв эффект оружия или щита, сбросьте их до конца боя.",
		footer: "Монстр",
		corner: "I"
	},
	{
		id: "enemy_4",
		type: "enemy",
		background: "png/enemy.png",
		image: "enemies/bee.png",
		name: "Пчела",
		skills: "Зверство I, Коварство I, Драка II, Яд III",
		health: "22",
		text: 'Ядовитое жало. "Ядовитые клыки" игнорируют блок.',
		footer: "Насекомое",
		corner: "I"
	}
]