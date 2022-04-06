import React from 'react';

const TodoForm = ({
  setInput, input, setFilterStatus, addTodo,
}) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    addTodo();
    setInput('');
  };
  const filterStatusHandler = (e) => {
    setFilterStatus(e.target.value);
  };
  return (
    <form className="todo-form">
      <input value={input} onChange={inputHandler} type="text" className="todo-form__input" />
      <button onClick={onFormSubmit} className="todo-form__button" type="submit">
        Add todo
      </button>
      <div className="todo-form__select">
        <select onChange={filterStatusHandler} name="todos" className="select">
          <option value="all" className="select__option">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};
export default TodoForm;
