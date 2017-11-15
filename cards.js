var cardsExample = [
	{
		id: 1,
		type: "example",
		name: "Яростноя отака",
		text: "Наносит {attack p 2} охуевшему от ужаса монстру.",
		border: "example.jpg",
		footer: "Пример",
		corner: "img/example_corner4.png"
	},
	{
		id: 2,
		type: "example",
		name: "Сильное колдунство",
		text: "Наносит {attack m 2} монстру, деморализуя его к ебеням.",
		border: "example.jpg",
		footer: "Пример",
		corner: "img/example_corner1.png"
	},
	{
		id: 3,
		type: "example",
		name: "Ональное агораживание",
		text: "Даёт игроку {defence p 1}{defence m 1}{defence u 1}, дабы монстр не смог добраться до его ануса.",
		border: "example.jpg",
		footer: "Пример",
		corner: "img/example_corner2.png"
	},
	{
		id: 4,
		type: "example",
		name: "Дихотомия Эскабара",
		text: "{attack m 1}{or}{attack p 1}",
		border: "example.jpg",
		footer: "Пример",
		corner: "img/example_corner3.png"
	},
	{
		id: 5,
		type: "enemyAttack",
		name: "Дёрнуть анус",
		diagram: {
			"ABC": "{attack p 1}",
			">DEF": "{attack m 2}{attack p 2}"
		},
		text: "+1 морального урона против самого игрока",
		footer: "Анальное угнетение",
		corner: "I"
	},
	{
		id: 6,
		type: "enemyAttack",
		name: "Аццкие стрелочки",
		diagram: {
			">BCF": "{attack m 2}{attack p 1}",
			">EDA": "{attack p 2}{attack m 1}"
		},
		text: "Игроки страдают от тестирования",
		footer: "Анальное угнетение",
		corner: "II"
	},
	{
		id: 7,
		type: "enemyAttack",
		name: "Инфернальные стрелочки",
		diagram: {
			">AFBDCE": "{attack m 3}{attack p 3}"
		},
		text: "Игроки страдают от страдания",
		footer: "Анальное угнетение",
		corner: "III"
	}
]


var characters = [
	{
		id: "char_gunnhild",
		type: "character",
		name: "Гуннхильда",
		text: `В прошлом грозная предводительница отряда наёмников, теперь она наводит ужас лишь на соседей по богадельне.`,
		stats: `Здоровье: {health 5}{br}
			Навыки: Лидерство, Оборона, Штурм.{br}
			Болезнь: Артрит`,
		image: "characters/warrior.png",
		background: "png/character.png",
		footer: "Воин"
	},
	{
		id: "char_bernard",
		type: "character",
		name: "Бернард",
		text: `Некогда могущественный клерик, исцелявший любую хворь наложением рук. Ныне он налагает руки в основном на бутылку. `,
		stats: `Здоровье: {health 5}{br}
			Навыки: Исцеление, Благословение, Кара небес.{br}
			Болезнь: Дальнозоркость`,
		image: "characters/warrior.png",
		background: "png/character.png",
		footer: "Жрец"
	},
	{
		id: "char_agness",
		type: "character",
		name: "Агнешка",
		text: `Эта сухонькая, безобидная с виду старушка по-прежнему способна неслышно подкрасться сзади 
			и воткнуть жертве в печень вязальную спицу.`,
		stats: `Здоровье: {health 4}{br}
			Навыки: Скрытность, Ловкость рук, Отрава.{br}
			Болезнь: Подагра`,
		image: "characters/thief.png",
		background: "png/character.png",
		footer: "Вор"
	},
	{
		id: "char_bartholomew",
		type: "character",
		name: "Варфоломей",
		text: `Говорят, что сила мага пропорциональна его безумию. Если поговорка верна, то в последние годы этот маг 
			стал особенно силён.`,
		stats: `Здоровье: {health 4}{br}
			Навыки: Прорицание, Призывание, Проклятие.{br}
			Болезнь: Деменция`,
		image: "characters/thief.png",
		background: "png/character.png",
		footer: "Маг"
	}
];

var basic = [
	{
		id: "skill_warrior_1",
		type: "skill",
		name: "Выпад",
		description: "Шаг {then} {use weapon}",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_2",
		type: "skill",
		name: "Удар щитом",
		description: "{attack p 1} {then} {use shield}",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_3",
		type: "skill",
		name: "Со щитом или без щита",
		description: "{defence p 1} себе или соседу {or} {use shield}",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_4",
		type: "skill",
		name: "Стальные бока",
		description: "{defence p 1} {or} {use armor}",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_5",
		type: "skill",
		name: "Пробить броню",
		useFrom: "ABC",
		description: "{attack p 2} {br} Двойной урон против блока.",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_6",
		type: "skill",
		name: "Отвлекающий манёвр",
		description: "{attack p 1} {br} {defence p 1} другим игрокам в своём ряду.",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_7",
		type: "skill",
		name: "Мощный пинок",
		useFrom: "ABC",
		description: "{attack p 1} {then} переместиться назад, если свободно.",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
	{
		id: "skill_warrior_8",
		type: "skill",
		name: "Не верю в фей",
		description: "{defence p 1} {onturnend} нанести противнику {attack m 1} за каждую единицу заблокированного урона.",
		background: "png/skill.png",
		footer: "Базовый/Воин"
	},
];

var cards = characters.concat(basic);
var final = {};

cards.forEach(card => {
	var id = card.id;
	if(final[id]){
		throw new Error("Card id collision detected: " + id);
	}
	final[id] = card;
})

module.exports = final;