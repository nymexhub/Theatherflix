export let setSearchText = (search) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText: search
  };
};

export let toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};

export let addTodo = (todoText) => {
  return {
    type: 'ADD_TODO',
    todoText
  };
};

export let addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};

export let toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
