var React = require("react");

var RichText = require("./richtext.jsx");

const size = 50;

const coords = {
	A: [0, 0],
	B: [0, 1],
	C: [0, 2],
	D: [1, 0],
	E: [1, 1],
	F: [1, 2]
}

const padding = [0.4*size, 0.4*size];

function arrowStart([x0, y0], [x1, y1], [px, py]){
	var d = {
		x: x1 - x0,
		y: y1 - y0
	}
	var k1 = Math.abs(px/d.x);
	var k2 = Math.abs(py/d.y);
	var k = Math.min(k1, k2);
	return [x0 + d.x*k, y0 + d.y*k];
}

function generatePath(key){
	console.log(key);
	var cells = key
		.split("")
		.slice(1)
		.map(
			letter => coords[letter].map(
				t => (t + 0.5)*size
			)
		)
		.map(
			([y, x]) => [x, y]
		);
	var path = "M" + arrowStart(cells[0], cells[1], padding).join(",");
	cells.shift();
	while(cells.length){
		path += " L" + cells.shift().join(",");
	}
	return path;
}
function Diagram({data}){
	var tableContent = [
		[null, null, null],
		[null, null, null]
	];
	var paths = [];
	if(!data){
		return null;
	}
	Object.keys(data).forEach(key => {
		var cells;
		if(key[0] == ">"){
			cells = [key[1]];
			paths.push(generatePath(key));
		}else{
			cells = key.split("");
		}
		cells.forEach(cell => {
			var [x, y] = coords[cell];
			tableContent[x][y] = data[key];
		})
	});

	return <div className="diagram"><div>
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
		<svg viewBox={`0 0 ${3*size} ${2*size}`} preserveAspectRatio="none">
			<defs>
				<marker id="end" markerWidth="4" markerHeight="4"
        			orient="auto" refX="4" refY="2">
  					<path d="M0,0 L4,2 L0,4" />
				</marker>
				<marker id="start" markerWidth="4" markerHeight="4"
        			orient="auto" refX="1" refY="1">
  					<circle cx="1" cy="1" r="1"/>
				</marker>
			</defs>
			{paths.map((d, i) =>
			<path key={i} fill="none" markerStart="url(#start)" 
				markerEnd="url(#end)" stroke="black" strokeWidth="2" d={d}/>
			)}
		</svg>
	</div></div>
}

module.exports = Diagram;