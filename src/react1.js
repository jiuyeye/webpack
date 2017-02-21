var React = require('react');
var ReactDOM = require('react-dom');
var Hello = React.createClass({
  render: function render() {
    return <div>Helloddd {this.props.name}</div>;
  }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('AppRoot')
);
