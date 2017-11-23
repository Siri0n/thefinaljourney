module.exports = [
	{
		id: "skill_thief_1",
		type: "skill",
		name: "Бей или беги",
		description: "Шаг {or} {use weapon big}",
		background: "png/skill.png",
		footer: "Базовый/Вор"
	},
	{
		id: "skill_thief_2",
		type: "skill",
		name: "Бей, затем беги",
		description: "{use weapon big} {then} переместиться назад, если свободно",
		background: "png/skill.png",
		footer: "Базовый/Вор"
	},
	{
		id: "skill_thief_3",
		type: "skill",
		name: "Покров тени",
		description: "Поменяться местами с любым игроком {or} {use shield big}",
		background: "png/skill.png",
		footer: "Базовый/Вор"
	},
	{
		id: "skill_thief_4",
		type: "skill",
		name: "Счастливая подкова",
		description: "{attack p 1 big} {or} {use amulet}",
		background: "png/skill.png",
		footer: "Базовый/Вор"
	},
	{
		id: "skill_thief_5",
		type: "skill",
		name: "Перо под ребро",
		useFrom: "ACDF",
		description: "Неблокируемый {attack p 1 big}",
		background: "png/skill.png",
		footer: "Базовый/Вор"
	},
	{
		id: "skill_thief_6",
		type: "skill",
		name: "Пыль в глаза",
		description: "-{defence u 1} противнику {may} переместиться в любую свободную клетку",
		background: "png/skill.png",
		footer: "Базовый/Вор"
	},
	{
		id: "skill_thief_7",
		type: "skill",
		name: "Чехарда",
		description: "Толкнуть соседа {br} Сосед получает +{attack p 1} на этот ход",
		background: "png/skill.png",
		footer: "Базовый/Вор"
	},
	{
		id: "skill_thief_8",
		type: "skill",
		name: "Бритва",
		description: "{attack p 1 big} {br} Двойной урон, если у противника нет {defence p 1}",
		background: "png/skill.png",
		footer: "Базовый/Вор"
	},
];