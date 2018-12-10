// All by Felipe Alfonso Gonzalez
// Software Craftsman 
// f.alfonso.go@gmail.com 

// variable to create a nested component : ->
var GreeterMessage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Some H1</h1>
        <p>Some paragraph</p>
      </div>

    );
  }
});

var GreeterForm = React.createClass({
 render: function () {
   return (
     <form onSubmit={this.onButtonClick}>
     <input type="text" ref="name" />
     <button>Set name</button>
   </form>
   );
 }
});


//component in React 
var Greeter = React.createClass({
 // usage of Default props 
 getDefaultProps: function (){
   return {
     name: 'React',
     message: 'Default message'
   };
 },
 getInitialState: function () {
    return {
       name: this.props.name
    };
 },
 onButtonClick: function (e) {
       e.preventDefault();

       var nameRef = this.refs.name;

       var name = this.refs.name.value;
       //after to send the name as a var I clear the field
       // this.refs.name.value = '';
       nameRef.value = '';

       if (typeof name == 'string' && name.length > 0) {
          this.setState({
            name: name
          });
       }
      // alert(name);

 },
 render: function () {

   // usage of props
   var name = this.state.name;
   var message = this.props.message;
 
   return (
     <div>
       <h1>Hello {name}!</h1>
       <p>{message + '!!'}</p>

       
       <GreeterMessage/>

        <form onSubmit={this.onButtonClick}>
     <input type="text" ref="name" />
     <button>Set name</button>
   </form>
       <GreeterForm/>

     </div>
   );

 }
});


// var props
var firstname = 'Andrew';
ReactDOM.render(
 // we pass the var through React JSX
 <Greeter name={firstname} message="This is a message"/>,
 document.getElementById('app')
);



