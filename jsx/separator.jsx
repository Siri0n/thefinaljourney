var React = require("react");

function Separator({text}){
	return <div className="separator">
		<span>{text}</span>
	</div>
}

module.exports = Separator;