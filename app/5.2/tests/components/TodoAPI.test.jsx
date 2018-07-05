var expect = require('expect');

var TodoAPI = require('TodoAPI');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [{
        id: 14,
        text: 'Test todo',
        completed: false
      }];
      TodoAPI.setTodos(todos);
      var localTodos = JSON.parse(localStorage.getItem('todos'));
      expect(localTodos).toEqual(todos);
    });

    it('should not set invalid todos array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });

  describe('getTodos', () => {
    it('should return empty array for bad local data', () => {
      var localTodos = TodoAPI.getTodos();
      expect(localTodos).toEqual([]);
    });

    it('should return todo array if valid in local', () => {
      var todos = [{
        id: 14,
        text: 'Test todo',
        completed: false
      }];
      localStorage.setItem('todos', JSON.stringify(todos));
      var localTodos = TodoAPI.getTodos();
      expect(localTodos).toEqual(todos);
    });
  });

  describe('filterTodos', () => {
    var todos = [{
      id: 1,
      text: 'Some test text',
      completed: true
    } , {
      id: 2,
      text: 'More test text',
      completed: false
    } , {
      id: 3,
      text: 'Even more test text',
      completed: true
    }];

    it('should return all items if showCompleted is true', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });

    it('should return non-completed todos when showCompleted is false', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, false, '');
      expect(filteredTodos.length).toBe(1);
    });

    it('should sort by completed status', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos[0].completed).toBe(false);
    });

    it('should filter todos by searchText', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, 'more');
      expect(filteredTodos.length).toBe(2);
    });

    it('should return all todos when searchText is empty', () => {
      var filteredTodos = TodoAPI.filterTodos(todos, true, '');
      expect(filteredTodos.length).toBe(3);
    });
  });
});
