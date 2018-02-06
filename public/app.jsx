var Greeter = React.createClass({
    getDefaultProps: function () {
      return {
        name: 'Theatherflix OpenSource Project',
        message: 'A visual tool for wiring the Internet of Things, digital movies, stored in your HD. The cousin of Netflix in the future.'
      };
    },
    render: function () {
      var name = this.props.name;
      var message = this.props.message;
  
      return (
        <div>
          <h1>{name}</h1>

          <p>{message}</p>
        </div>
      );
    }
  });
  
  
  ReactDOM.render(
    <Greeter />,
    document.getElementById('theatherflixapp')
  );
  

  // probably the logic will be like to continue with different containers to load the movies ....  but here's the thing! how to sync it without to code container after container ! .....
  // cause with handlebars I had the same issue.... I gotta research ... in the end React is huge...  quite flexible ... 

  // if you wanna code with good music in the background, I recommend : https://ibizasonica.com/


