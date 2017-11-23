module.exports = [
	{
		id: "skill_cleric_1",
		type: "skill",
		name: "Помощь ближнему",
		description: "{defence p 1 big} соседу {or} {use shield big}",
		background: "png/skill.png",
		footer: "Базовый/Жрец"
	},
	{
		id: "skill_cleric_2",
		type: "skill",
		name: "Духовная защита",
		description: "{defence m 1 big} всем соседям {or} {use armor big}",
		background: "png/skill.png",
		footer: "Базовый/Жрец"
	},
	{
		id: "skill_cleric_3",
		type: "skill",
		name: "Отдохновение",
		description: "{health 1 big} {then} {use armor big}",
		background: "png/skill.png",
		footer: "Базовый/Жрец"
	},
	{
		id: "skill_cleric_4",
		type: "skill",
		name: "Гулять по воде",
		description: "Шаг {or} {use amulet big}",
		background: "png/skill.png",
		footer: "Базовый/Жрец"
	},
	{
		id: "skill_cleric_5",
		type: "skill",
		name: "Аура исцеления",
		useFrom: "ABC",
		description: "{health 1 big} себе и всем соседям",
		background: "png/skill.png",
		footer: "Базовый/Жрец"
	},
	{
		id: "skill_cleric_6",
		type: "skill",
		name: "Спасение",
		description: "{defence u 1 big} любому игроку.",
		background: "png/skill.png",
		footer: "Базовый/Жрец"
	},
	{
		id: "skill_cleric_7",
		type: "skill",
		name: "Посредник",
		useFrom: "ABC",
		description: "{attack m 2 big} {br} {health 2} игроку сзади",
		background: "png/skill.png",
		footer: "Базовый/Жрец"
	},
	{
		id: "skill_cleric_8",
		type: "skill",
		name: "Добро с кулаками",
		description: "{attack p 1 big} {may} шаг в сторону",
		background: "png/skill.png",
		footer: "Базовый/Жрец"
	},
];