var $ = require('jQuery')

module.exports = {
  setTodos: function(todos){
    if($.isArray(todos)){
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  },
  getTodos: function(){
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch(e) {
      console.log(e);
    }

    return $.isArray(todos) ? todos : [];
  },
  filterTodos: function(todos, showCompleted, searchText){
    var filteredTodos = todos;

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
      var text = todo.text.toLowerCase();
      return (text.indexOf(searchText) != -1);
    });

    return filteredTodos;
  }
};
