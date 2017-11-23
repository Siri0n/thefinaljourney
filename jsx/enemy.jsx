var React = require("react");

var RichText = require("./richtext.jsx"),
	Flavour = require("./flavour.jsx"),
	Image = require("./image.jsx");

function Character({name, background, image, health, text, skills, footer, corner}){
	return <div className="card" style={{backgroundImage: "url('img/" + background + "')"}}><div className="inner">
		<div className="name">{name}</div>
		<div className="image-main">
			<img src={"img/" + image}/>
			<div>
				<img className="icon big" src="img/health.png"/>x{health} 
			</div>
		</div>
		<div className="text">{skills.replace(/([^,]) /g, "$1\u00A0")}</div>
		<RichText text={text}/>
		{corner && <div className="corner">{corner}</div>}
		<div className="footer">{footer}</div>
	</div></div>
}

module.exports = Character;