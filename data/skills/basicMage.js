module.exports = [
	{
		id: "skill_mage_1",
		type: "skill",
		name: "Волшебная палка",
		description: "{attack m 1 big} {or} {use weapon big}",
		background: "png/skill.png",
		footer: "Базовый/Маг"
	},
	{
		id: "skill_mage_2",
		type: "skill",
		name: "Латы из синего льда",
		description: "{defence p 1 big}{defence m 1 big} {or} {use armor big}",
		background: "png/skill.png",
		footer: "Базовый/Маг"
	},
	{
		id: "skill_mage_3",
		type: "skill",
		name: "Порча",
		description: "{attack m 1 big} {then} {use amulet big}",
		background: "png/skill.png",
		footer: "Базовый/Маг"
	},
	{
		id: "skill_mage_4",
		type: "skill",
		name: "Кроличья лапка",
		description: "Получить карту {or} {use amulet big}",
		background: "png/skill.png",
		footer: "Базовый/Маг"
	},
	{
		id: "skill_mage_5",
		type: "skill",
		name: "Энергичная стрела",
		useFrom: "DEF",
		description: "{attack m 1 big}{br}Если в клетке впереди кто-то есть, переместить его в свободную клетку",
		background: "png/skill.png",
		footer: "Базовый/Маг"
	},
	{
		id: "skill_mage_6",
		type: "skill",
		name: "Чтение мыслей",
		description: "{attack m 1 big}{onhit}посмотреть две верхние карты в колоде противника{br}положить их обратно в любом порядке",
		background: "png/skill.png",
		footer: "Базовый/Маг"
	},
	{
		id: "skill_mage_7",
		type: "skill",
		name: "Удар из ниоткуда",
		description: "Переместить выбранного игрока в свободную клетку{br}Этот игрок получает +{attack m 1} до конца хода",
		background: "png/skill.png",
		footer: "Базовый/Маг"
	},
	{
		id: "skill_mage_8",
		type: "skill",
		name: "Сделать хотел грозу",
		description: "{attack m 3 big} {br} {attack m 1} каждому игроку в первом ряду",
		background: "png/skill.png",
		footer: "Базовый/Маг"
	},
];