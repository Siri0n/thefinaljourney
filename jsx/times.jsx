var React = require("react");

function Times({src, n, size}){
	var iconClass = "icon";
	if(size){
		iconClass += " big"; 
	}
	return <div className="icon-container">
		{Array.apply(null, Array(n)).map((_, i) => {
				return <img key={i} className={iconClass} src={src}/>
			}
		)}
	</div>
}

module.exports = Times;