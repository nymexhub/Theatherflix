

class App extends Component {
    _handleChange = e => {
      e.preventDefault()
      let item = e.target.querySelector('input').value;
      this.props.createTodo(item);
    }
    render() {
      return (
        <div>
        <form onSubmit={this._handleChange}>
          <input type="text" name="listItem" />
         <button type="submit">button</button>
         </form>
          <br />
          {this.props.todos.map((text, id) => (
            <div key={id}>
                {text}
            </div>
          )) }
        </div>
      );
    }
  }