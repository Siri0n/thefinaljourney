var React = require("react");

var RichText = require("./richtext.jsx");

const coords = {
	A: [0, 0],
	B: [0, 1],
	C: [0, 2],
	D: [1, 0],
	E: [1, 1],
	F: [1, 2]
}

function Diagram({data}){
	var tableContent = [
		[null, null, null],
		[null, null, null]
	];
	Object.keys(data).forEach(key => {
		var cells;
		if(key[0] == ">"){
			cells = [key[1]];
		}else{
			cells = key.split("");
		}
		cells.forEach(cell => {
			var [x, y] = coords[cell];
			tableContent[x][y] = data[key];
		})
	});

	return <div className="diagram">
		<table><tbody>
			{tableContent.map((row, i) => 
			<tr key={i}>
				{row.map((cell, j) => 
				<td key={j}>
					<RichText text={cell}/>
				</td>
				)}
			</tr>
			)}
		</tbody></table>
	</div>
}

module.exports = Diagram;