var React = require("react");

var cardTypes = {
	example: require("./example.jsx")
}

function Card(props){
	console.log(props.type);
	var ActualCard = cardTypes[props.type];
	return <ActualCard {...props}/>
}

module.exports = Card;