let $ = require('jQuery')

module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  },
  getTodos: function(){
    let stringTodos = localStorage.getItem('todos');
    let todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {
      console.log(e);
    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText){
    let filteredTodos = todos;

    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed){
        return -1;
      } else if(a.completed && !b.completed){
        return 1;
      } else {
        return 0;
      }
    });

    filteredTodos = filteredTodos.filter((todo) => {
      let text = todo.text.toLowerCase();
      return (text.indexOf(searchText) != -1);
    });

    return filteredTodos;
  }
};
