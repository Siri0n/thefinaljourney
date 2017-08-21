var React = require("react");

var Diagram = require("./diagram.jsx");
var RichText = require("./richtext.jsx");

function EnemyAttack({name, diagram, text, footer, number}){
	return <div className="card" style={{backgroundImage: "url('img/enemyAttack.png')"}}><div className="inner">
		<div className="name">{name}</div>
		<Diagram data={diagram}/>
		<RichText text={text}/>
		<div className="footer">{footer}</div>
		<div className="number">{number}</div>
	</div></div>
}

module.exports = EnemyAttack;