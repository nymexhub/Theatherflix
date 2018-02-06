var Greeter = React.createClass({
    getDefaultProps: function () {
      return {
        name: 'Theatherflix',
        message: 'Theatherflix OpenSource Project - A visual tool for wiring the Internet of Things, digital movies, stored in your HD. The cousin of Netflix in the future.'
      };
    },
    render: function () {
      var name = this.props.name;
      var message = this.props.message;
  
      return (
        <div>
          <h1>Hello {name}!</h1>
          <p>{message}</p>
        </div>
      );
    }
  });
  
  
  ReactDOM.render(
    <Greeter name={name}/>,
    document.getElementById('app')
  );
  