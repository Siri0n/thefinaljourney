var React = require("react");

var RichText = require("./richtext.jsx"),
	UseFrom = require("./useFrom.jsx"),
	Flavour = require("./flavour.jsx");

function Skill({name, background, useFrom, description, footer, corner}){
	return <div className="card" style={{backgroundImage: "url('img/" + background + "')"}}><div className="inner">
		<div className="name">{name}</div>
		<UseFrom data={useFrom}/>
		<RichText text={description}/>
		{corner && <div className="corner">{corner}</div>}
		<div className="footer">{footer}</div>
	</div></div>
}

module.exports = Skill;