import React from 'react';
import './Todoform.css';
import TodoItem from './TodoItem';

const TodoList = ({
  filterTodos, completeTodo, deleteTodo, editTodo,
}) => (
  <div className="todo-container">
    <ul className="todo-list">
      {filterTodos.map(((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          task={todo.task}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      )))}
    </ul>
  </div>
);

export default TodoList;
