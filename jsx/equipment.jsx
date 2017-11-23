var React = require("react");

var Block = require("./block.jsx");


function Equipment({name, background, effect, passive, footer, cornerImage}){
	return <div className="card" style={{backgroundImage: "url('img/" + background + "')"}}><div className="inner">
		<div className="name">{name}</div>
		{effect && <Block caption="При использовании:" text={effect}/>}
		{passive && <Block caption="Пассивный эффект:" text={passive}/>}
		{cornerImage && <div className="corner">
			<img src={"img/" + cornerImage}/>
		</div>}
		<div className="footer">{footer}</div>
	</div></div>
}

module.exports = Equipment;