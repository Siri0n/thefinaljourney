var React = require("react");

function RichText({text}){
	return <div>
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
			src = "img/physicalAttack.png";
		}else if(type == "m"){
			src = "img/magicalAttack.png";
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
			src = "img/physicalDefence.png";
		}else if(type == "m"){
			src = "img/magicalDefence.png";
		}else if(type == "u"){
			src = "img/universalDefence.png";
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
		return
	},
	then(){

	}
}
module.exports = RichText;