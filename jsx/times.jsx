var React = require("react");

function Times({src, n}){
	return <div className="icon-container">
		{Array.apply(null, Array(n)).map((_, i) => {
				return <img key={i} className="icon" src={src}/>
			}
		)}
	</div>
}

module.exports = Times;