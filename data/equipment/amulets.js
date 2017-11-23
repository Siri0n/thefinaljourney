module.exports = [
	{
		id: "amulet_1",
		type: "equipment",
		name: "Кукла колдуна",
		effect: "{attack m 3 big}{br}- {health 1} соседнему игроку",
		background: "png/equipment.png",
		footer: "Амулет",
		cornerImage: "equipment/amulet.png"
	},
	{
		id: "amulet_2",
		type: "equipment",
		name: "Теневой манипулятор",
		effect: "Шаг {or} толчок",
		background: "png/equipment.png",
		footer: "Амулет",
		cornerImage: "equipment/amulet.png"
	},
	{
		id: "amulet_3",
		type: "equipment",
		name: "Ветка шиповника",
		effect: "+ {health 2 big}",
		passive: "- {health 1 big} max",
		background: "png/equipment.png",
		footer: "Амулет",
		cornerImage: "equipment/amulet.png"
	},
	{
		id: "amulet_4",
		type: "equipment",
		name: "Протектор",
		passive: `Иммунитет к потере карт`,
		background: "png/equipment.png",
		footer: "Амулет",
		cornerImage: "equipment/amulet.png"
	},

];