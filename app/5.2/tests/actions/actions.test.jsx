var expect = require('expect');
var actions = require('actions');

describe('Actions', () => {
  it('should generate search text action', () => {
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Test search text'
    };
    var res = actions.setSearchText(action.searchText);
    expect(res).toEqual(action);
  });

  it('should generate toggle show completed action', () => {
    var action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };
    var res = actions.toggleShowCompleted();
    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    var action = {
      type: 'ADD_TODO',
      todoText: 'Test todo text'
    };
    var res = actions.addTodo(action.todoText);
    expect(res).toEqual(action);
  });

  it('should generate toggle todo action', () => {
    var action = {
      type: 'TOGGLE_TODO',
      id: 5
    };
    var res = actions.toggleTodo(action.id);
    expect(res).toEqual(action);
  });

  it('should generate addtodos actions object', () => {
    var todos = [
      {
        id: 111,
        text: 'test text',
        completed: false,
        completedAt: undefined,
        createdAt: 734
      }
    ];
    var action = {
      type: 'ADD_TODOS',
      todos
    }
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });
});
