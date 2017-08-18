var React = require("react");
var ReactDOM = require("react-dom");
var UI = require("./jsx/ui.jsx");
var cards = require("./cards.js");

window.onload = () => 
ReactDOM.render(
	React.createElement(UI, {cards, list: [1, 1]}),
	document.getElementById("main")
);