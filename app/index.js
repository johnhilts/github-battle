var React = require('react');
var ReactDOM = require('react-dom');

var HellowWorld = React.createClass({
	render: function() {
		return (
			<div>Hello Worldz!!</div>
		)
	}
});

ReactDOM.render(
	<HellowWorld />,
	document.getElementById('app')
);

