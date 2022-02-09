import React, { useState } from 'react';
import { BsTrash, BsSave2 } from 'react-icons/bs';
import { AiOutlineCheck, AiFillEdit } from 'react-icons/ai';

const Todo = ({
  task, todo, completeTodo, deleteTodo, EditTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const editFormSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    if (editTask === '') {
      setEditTask(task);
    }
    if (editTask !== task && editTask !== '') {
      EditTodo(editTask, todo);
    }
  };

  return (
    <div className="todo">
      <li className={`todo-item  ${todo.completed ? 'completed' : ''}`}>
        {isEditing ? (
          <form className="todo-edit">
            <input
              onChange={(e) => setEditTask(e.target.value)}
              value={editTask}
              type="text"
              className="todo-edit__input"
            />
            <button className="todo-edit__button" onClick={editFormSubmit} type="submit">
              <BsSave2 />
            </button>
          </form>
        ) : `${editTask}`}
      </li>
      <button type="button" onClick={() => setIsEditing(!isEditing)} className="edit-btn">
        <AiFillEdit />
      </button>
      <button type="button" onClick={() => completeTodo(todo)} className="complete-btn">
        <AiOutlineCheck />
      </button>
      <button type="button" onClick={() => deleteTodo(todo)} className="trash-btn">
        <BsTrash />
      </button>
    </div>
  );
};

export default Todo;
