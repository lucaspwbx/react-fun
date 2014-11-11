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

var Divider3 = React.createClass({
  render: function () {
    return (
      <div className="divider">
        <h2>{this.props.surveys} -> {this.props.bla}</h2><hr/>
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

var SaveButton = React.createClass({
  render: function () {
    return (
      <button className='saveBtn' onClick={this.handleClick}>Save</button>
      );
  },
  handleClick: function () {
    alert('clickou');
  }
});

var AnswerRadioInput = React.createClass({
  getInitialState: function () {
    return {
      checked: !!this.props.checked
    };
  },
  handleChanged: function (e) {
    var checked = e.target.checked;
    this.setState({checked: checked});
  },
  render: function () {
    return (
      <div className="radio">
        <label>
          <input type="radio"
            checked={this.state.checked}
            onChange={this.handleChanged} />
          {this.props.label}
        </label>
      </div>
      );
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

  //setting props during instantiation
  var surveys = [{title: 'Superheroes' }, {title: 'Electro'}];
  React.render(
      <Divider3 surveys={surveys} bla="ok"/>, document.getElementById('container')
  );

  //setProps method on a component instance
 // var surveys = [{title: 'Blabla'}];
 // var listSurveys = React.render(
   //   <Divider3/>,
    //  document.getElementById('container')
     // );
  //listSurveys.setProps({surveys: surveys});

 // React.render(
   //   <SaveButton/>, document.getElementById('container')
    //  );
   React.render(
       <AnswerRadioInput/>, document.getElementById('container')
       );
};

$(document).ready(ready);
