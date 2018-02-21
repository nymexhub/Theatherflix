
// Coding by Felipe Alfonso Gonzalez -  Software Engineer CC 2018 
// ---------------------------------------------------------------
// if you wanna code with good music in the background, I recommend : https://ibizasonica.com/


var reeter = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'Theatherflix OpenSource Project',
      message: 'A visual tool for wiring the Internet of Things, digital movies, stored in your HD. "The cousin of Netflix in the future".'
    };
  },
  getInitialState: function () {
    return {
        title: this.props.title,
        message: this.props.message
    };
  },
  handleNewData: function (updates) {
    this.setState(updates);
  },
  render: function () {
    var title = this.state.title;
    var message = this.state.message;

    return (
      <div>
        <GreeterMessage title={title} message={message}/>
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

var firstName = 'Felipe the Founder welcomes you!';

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
