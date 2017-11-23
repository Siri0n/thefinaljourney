var characters = require("./data/characters");
var basic = require("./data/skills");
var items = require("./data/equipment");
var enemyAttacks = require("./data/enemyAttacks");
var enemies = require("./data/enemies");

var cards = [...characters, ...basic, ...items, ...enemyAttacks, ...enemies];


var final = {};

cards.forEach(card => {
	var id = card.id;
	if(final[id]){
		throw new Error("Card id collision detected: " + id);
	}
	final[id] = card;
})

module.exports = final;