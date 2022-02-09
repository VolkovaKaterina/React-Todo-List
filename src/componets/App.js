import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import todoApi from '../api/todoApi';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);
  const uniqueId = uuid();
  const smallId = uniqueId.slice(0, 6);

  useEffect(() => {
    const getTodos = async () => {
      const response = await todoApi.get('/todos');
      setTodos(response.data);
    };
    getTodos();
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
        const newTodo = await todoApi.post('/todos', {
          task: input,
          completed: false,
          id: smallId,
        });

        if (newTodo.statusText === 'Created') {
          setTodos([...todos, newTodo.data]);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  const completeTodo = async (todo) => {
    try {
      await todoApi.put(`/todos/${todo.id}`, { ...todo, completed: !todo.completed });

      setTodos(todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      }));
    } catch (err) {
      console.log(err);
    }
  };
  const EditTodo = async (value, todo) => {
    try {
      await todoApi.patch(`/todos/${todo.id}`, { task: value });

      setTodos(todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, task: value };
        }
        return item;
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (todo) => {
    try {
      await todoApi.delete(`/todos/${todo.id}`);

      setTodos(todos.filter((item) => item.id !== todo.id));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="wrapper">
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
        EditTodo={EditTodo}
      />

    </div>
  );
};

export default App;
