var React = require("react");

const prefix = "img/";

function Image({type, src}){
	var className;
	if(type == "main"){
		className = "main";
	}else if(type == "inline"){
		className = "inline";
	}
	return <img src={prefix + src} className={className}/> 
}

module.exports = Image;