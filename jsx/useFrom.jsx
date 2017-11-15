var React = require("react");

const coords = {
	A: [0, 0],
	B: [0, 1],
	C: [0, 2],
	D: [1, 0],
	E: [1, 1],
	F: [1, 2]
}

function Diagram({data}){
	if(!data){
		return null;
	}
	var tableContent = [
		[null, null, null],
		[null, null, null]
	];
	data.split("").forEach(cell => {
		var [x, y] = coords[cell];
		tableContent[x][y] = true;
	})

	return <table className="useFrom"><tbody>
		{tableContent.map((row, i) => 
		<tr key={i}>
			{row.map((cell, j) => 
			<td key={j}>
				{cell ?
				<img src="img/png/ok.png"/> :
				<img src="img/png/not_ok.png"/>
				}
			</td>
			)}
		</tr>
		)}
	</tbody></table>

}

module.exports = Diagram;