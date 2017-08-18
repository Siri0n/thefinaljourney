var React = require("react");
var Card = require("./card.jsx");

function evalProto(cards, id){
	return cards[id]; //for now
}
module.exports = function({cards, list}){
	return <div>{
		list.map((id, n) => 
		<Card key={n} {...evalProto(cards, id)}/>	
		)
	}</div>
}