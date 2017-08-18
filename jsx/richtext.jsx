var React = require("react");

function RichText({text}){
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
		return <div key={key} className="icon-container">
			{Array.apply(null, Array(n)).map((_, i) => {
				console.log(i);
				return <img key={i} className="icon damage_p" src={src}/>
			}
			)}
		</div>
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
		return <div key={key} className="icon-container">
			{Array.apply(null, Array(n)).map((_, i) => {
				console.log(i);
				return <img key={i} className="icon damage_p" src={src}/>
			}
			)}
		</div>
	},
	or(key){
		return <div key={key} className="br">

		</div>
	},
	then(key){
		return <div key={key} className="br">

		</div>
	}
}
module.exports = RichText;