var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  onTodoSubmit: function(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var newTodo = this.refs.newTodo.value;
    if(newTodo.length > 0){
      this.refs.newTodo.value = '';
      dispatch(actions.addTodo(newTodo));
    }
  },
  render: function(){
    return (
      <div className="container__footer">
        <form onSubmit={this.onTodoSubmit}>
          <input type="text" ref="newTodo" placeholder="Add New Todo" />
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
