import React, { useState, useEffect } from 'react';
import {
  get, create, update, remove,
} from '../api/TodoService';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);
  const [height, setHeight] = useState(0);

  useEffect(() => { setHeight(document.documentElement.scrollHeight); });

  useEffect(() => {
    (async () => {
      try {
        const { data } = await get();
        setTodos(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  useEffect(() => {
    switch (filterStatus) {
      case 'completed':
        setFilterTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilterTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodos(todos);
    }
  }, [todos, filterStatus]);

  const addTodo = async () => {
    if (input) {
      try {
        const { data } = await create({ task: input, completed: false });
        setTodos([...todos, data]);
      } catch (err) {
        console.error(err);
      }
    }
  };
  const completeTodo = async (todo) => {
    try {
      await update(todo.id, { ...todo, completed: !todo.completed });
      setTodos(todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }));
    } catch (err) {
      console.error(err);
    }
  };
  const editTodo = async (value, todo) => {
    try {
      await update(todo.id, { ...todo, task: value });
      setTodos(todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, task: value };
        }
        return item;
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTodo = async (todo) => {
    try {
      await remove(todo.id);
      setTodos(todos.filter((item) => item.id !== todo.id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="wrapper" style={{ height: `${height}px` }}>
      <TodoForm
        addTodo={addTodo}
        input={input}
        setInput={setInput}
        setFilterStatus={setFilterStatus}
      />
      <TodoList
        filterTodos={filterTodos}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />

    </div>
  );
};

export default App;
