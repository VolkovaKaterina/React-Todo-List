import React from 'react';
import './Todoform.css';
import Todo from './Todo';

const TodoList = ({
  filterTodos, completeTodo, deleteTodo, EditTodo,
}) => (
  <div className="todo-container">
    <ul className="todo-list">
      {filterTodos.map(((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          task={todo.task}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          EditTodo={EditTodo}
        />
      )))}
    </ul>
  </div>
);

export default TodoList;
