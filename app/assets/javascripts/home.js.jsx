/** @jsx React.DOM */
var Divider = React.createClass({
  render: function () {
    return (
      <div className="divider">
        <h2>Questions</h2><hr />
      </div>
      );
  }
});

var Divider2 = React.createClass({
  render: function () {
    return (
      <div className="divider">
        <h2>{this.props.children}</h2><hr/>
      </div>
      );
  }
});

var Calculator = React.createClass({
  getDefaultProps: function () {
    return {
      date: new Date()
    };
  },
    render: function () {
      var day = this.props.date.getDay();
      return <div>Day: {day}</div>;
    }
});

var Calculator2 = React.createClass({
  getDefaultProps: function () {
    return {
      initialValue: 'some-default-value'
    };
  },
  getInitialState: function () {
    return {
      value: this.props.initialValue
    };
  },
  render: function () {
    return <div>{this.state.value}</div>
  }
});

var ready = function () {
  React.render(
      <Divider/>, document.getElementById('comments')
  );
  React.render(
      <Divider2>Lucas</Divider2>, document.getElementById('container')
      );
  React.render(
      <Calculator2/>, document.getElementById('container')
      );
};

$(document).ready(ready);
