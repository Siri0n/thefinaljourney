module.exports = [
	{
		id: "shield_1",
		type: "equipment",
		name: "Чугунная сковорода",
		effect: "{attack p 1 big}{or}{defence p 1 big} соседу",
		background: "png/equipment.png",
		footer: "Щит",
		cornerImage: "equipment/shield.png"
	},
	{
		id: "shield_2",
		type: "equipment",
		name: "Псалтырь",
		effect: "{attack p 1 big}{defence m 1 big}",
		background: "png/equipment.png",
		footer: "Щит",
		cornerImage: "equipment/shield.png"
	},
	{
		id: "shield_3",
		type: "equipment",
		name: "Дага",
		effect: "{attack p 2 big}{or}{defence p 1 big}",
		background: "png/equipment.png",
		footer: "Щит",
		cornerImage: "equipment/shield.png"
	},
	{
		id: "shield_4",
		type: "equipment",
		name: "Толстый фолиант",
		passive: "+ {health 1 big} max",
		background: "png/equipment.png",
		footer: "Щит",
		cornerImage: "equipment/shield.png"
	},

];