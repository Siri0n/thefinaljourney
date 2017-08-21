var React = require("react");

var Times = require("./times.jsx");
var Separator = require("./separator.jsx");

function RichText({text}){
	if(!text){
		return null;
	}
	return <div className="text">
		{tokenize(text).map((token, i) => {
			if(typeof token == "string"){
				return <span key={i}>{token}</span>;
			}else{
				let template = token.shift();
				return templates[template](i, token);
			}
		})}
	</div>
}

function tokenize(text){
	return text
		.replace(/\{/g, "${")
		.replace(/\}/g, "}$")
		.split("$")
		.map(str => str[0] == "{" ? str.slice(1, -1).split(/\s/) : str);
}

var templates = {
	attack(key, [type, n]){
		n -= 0;
		var src;
		if(type == "p"){
			src = "img/attack_p.png";
		}else if(type == "m"){
			src = "img/attack_m.png";
		}
		return <Times {...{key, src, n}}/>
	},
	defence(key, [type, n]){
		n -= 0;
		var src;
		if(type == "p"){
			src = "img/defence_p.png";
		}else if(type == "m"){
			src = "img/defence_m.png";
		}else if(type == "u"){
			src = "img/defence_u.png";
		}
		return <Times {...{key, src, n}}/>
	},
	or(key){
		return <Separator key={key} text="ИЛИ"/>
	},
	then(key){
		return <Separator key={key} text="ЗАТЕМ"/>
	}
}
module.exports = RichText;