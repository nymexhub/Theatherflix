
var React=require("react");
var React=require("react-dom");

var Greeter = require("./Greeter"); 

/// var createReactClass = require('create-react-class');

// var createReactClass = require('create-react-class');

// module.exports= React.createClass({
 //var Greeter = React.createClass({ // I started with this, I get an error in the console ... needed to get fixed somehow.

  /*
strangely I get this error in the console:


Uncaught TypeError: React.createClass is not a function
    at Object.<anonymous> (bundle.js:65)
    at __webpack_require__ (bundle.js:20)
    at bundle.js:40
    at bundle.js:43



  */

   /// Tried this °°°°°° ----- °° _°°__°_°__°_°_°_°
//   module.exports= createReactClass({
 


    var Greeter = React.createClass({




        // trying something different :
        // var Greeter = createReactClass({ // this seems to be created a sort of fucking strange freeze in the browser .... °__° 
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
                <Greeter title={title} message={message}/>
              </div>
            );
          }
        });

// I try to export the greeters .... 
module.exports = Greeter; 