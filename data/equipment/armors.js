module.exports = [
	{
		id: "armor_1",
		type: "equipment",
		name: "Ржавый доспех",
		passive: "+ {health 1 big} max",
		background: "png/equipment.png",
		footer: "Броня",
		cornerImage: "equipment/armor.png"
	},
	{
		id: "armor_2",
		type: "equipment",
		name: "Рогатый шлем",
		effect: "{attack p 2 big}{br}Переместиться вперёд",
		background: "png/equipment.png",
		footer: "Броня",
		cornerImage: "equipment/armor.png"
	},
	{
		id: "armor_3",
		type: "equipment",
		name: "Розовые очки",
		passive: "Иммунитет к слепоте",
		background: "png/equipment.png",
		footer: "Броня",
		cornerImage: "equipment/armor.png"
	},
	{
		id: "armor_4",
		type: "equipment",
		name: "Броня посредника",
		effect: "{defence p 1 big}{defence m 1 big}",
		passive: `Навык "Посредник" может лечить любого соседнего игрока`,
		background: "png/equipment.png",
		footer: "Броня",
		cornerImage: "equipment/armor.png"
	},

];