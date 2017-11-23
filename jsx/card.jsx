var React = require("react");

var cardTypes = {
	example: require("./example.jsx"),
	character: require("./character.jsx"),
	skill: require("./skill.jsx"),
	equipment: require("./equipment.jsx"),
	enemy: require("./enemy.jsx"),
	enemyAttack: require("./enemyAttack.jsx")
}

function Card(props){
	var ActualCard = cardTypes[props.type];
	return <ActualCard {...props}/>
}

module.exports = Card;