var React = require("react");

var RichText = require("./richtext.jsx");

function Block({caption, text}){
	return <div className="block">
		<span className="caption">{caption}</span>
		<RichText text={text}/>
	</div>
}

module.exports = Block;