import React, { Component } from 'react'

export default class Greeter extends Component {
  handleNewData (updates) {
    this.setState({ ...this.state, updates })
  }

  render () {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.message}</h3>
      </div>
    )
  }
}

// var Greeter = React.createClass({
//   getDefaultProps: function () {
//     return {this.setState(updates);
//       title: 'Theatherflix OpenSource Project',
//       message: 'A visual tool for wiring the Internet of Things, digital movies, stored in your HD. "The cousin of Netflix in the future".'
//     };
//   },
//   getInitialState: function () {
//     return {
//         title: this.props.title,
//         message: this.props.message
//     };
//   },
//   handleNewData: function (updates) {
//     this.setState(updates);
//   },
//   render: function () {
//     var title = this.state.title;
//     var message = this.state.message;
//
//     return (
//       <div>
//         <Greeter title={title} message={message}/>
//       </div>
//     );
//   }
// });
