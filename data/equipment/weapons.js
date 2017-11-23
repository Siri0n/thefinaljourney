module.exports = [
	{
		id: "weapon_1",
		type: "equipment",
		name: "Тренировочный меч",
		effect: `{attack p 2 big} + {defence p 2 big}{br}
			Наносит урон только блоку противника, но не здоровью`,
		background: "png/equipment.png",
		footer: "Оружие",
		cornerImage: "equipment/weapon.png"
	},
	{
		id: "weapon_2",
		type: "equipment",
		name: "Боевой сельдерей",
		passive: "+ {health 1 big} max",
		background: "png/equipment.png",
		footer: "Оружие",
		cornerImage: "equipment/weapon.png"
	},
	{
		id: "weapon_3",
		type: "equipment",
		name: "Клюка",
		effect: "Шаг",
		background: "png/equipment.png",
		footer: "Оружие",
		cornerImage: "equipment/weapon.png"
	},
	{
		id: "weapon_4",
		type: "equipment",
		name: "Прочный посох",
		effect: "{attack m 2 big}",
		passive: `+ {defence p 1} , если использован навыком "Волшебная палка"`,
		background: "png/equipment.png",
		footer: "Оружие",
		cornerImage: "equipment/weapon.png"
	},

];