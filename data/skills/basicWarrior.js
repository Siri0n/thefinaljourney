module.exports = [
	{
		id: "skill_warrior_1",
		type: "skill",
		name: "Выпад",
		description: "Шаг {then} {use weapon big}",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_2",
		type: "skill",
		name: "Удар щитом",
		description: "{attack p 1 big} {then} {use shield big}",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_3",
		type: "skill",
		name: "Со щитом или без щита",
		description: "{defence p 1 big} себе или соседу {or} {use shield big}",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_4",
		type: "skill",
		name: "Стальные бока",
		description: "{defence p 1 big} {or} {use armor big}",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_5",
		type: "skill",
		name: "Пробить броню",
		useFrom: "ABC",
		description: "{attack p 2 big} {br} Двойной урон против блока.",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_6",
		type: "skill",
		name: "Отвлекающий манёвр",
		description: "{attack p 1 big} {br} {defence p 1 big} другим игрокам в своём ряду.",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_7",
		type: "skill",
		name: "Мощный пинок",
		useFrom: "ABC",
		description: "{attack p 1 big} {then} переместиться назад, если свободно.",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_8",
		type: "skill",
		name: "Не верю в фей",
		description: "{defence m 1 big} {onturnend} нанести противнику {attack m 1} за каждую единицу заблокированного урона.",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
];