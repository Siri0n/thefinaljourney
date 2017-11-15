var React = require("react");

var RichText = require("./richtext.jsx"),
	Flavour = require("./flavour.jsx"),
	Image = require("./image.jsx");

function Character({name, background, image, text, stats, footer, corner}){
	return <div className="card" style={{backgroundImage: "url('img/" + background + "')"}}><div className="inner">
		<div className="name">{name}</div>
		<div className="image-main">
			<img src={"img/" + image}/>
		</div>
		<RichText text={stats}/>
		<Flavour text={text}/>
		{corner && <div className="corner">{corner}</div>}
		<div className="footer">{footer}</div>
	</div></div>
}

module.exports = Character;