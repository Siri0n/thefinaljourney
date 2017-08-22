var React = require("react");
var RichText = require("./richtext.jsx");

function Example({name, text, border, footer, corner}){
	return <div className="card" style={{backgroundImage: "url('img/" + border + "')"}}><div className="inner">
		<div className="name">{name}</div>
		<RichText text={text}/>
		<div className="footer">{footer}</div>
		<div className="corner">
			<img src={corner}/>
		</div>
	</div></div>
}

module.exports = Example;