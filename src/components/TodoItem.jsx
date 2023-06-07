import React, { useState, useRef } from 'react';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
  const editInputRef = useRef(null);
  const [editing, setEditing] = useState(false);
  const [updateInput, setUpdateInput] = useState(itemProp.title);

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setUpdate(editInputRef.current.value, itemProp.id);
      setEditing(false);
    }
  };

  const handleDelete = () => {
    delTodo(itemProp.id);
  };

  const viewMode = editing ? { display: 'none' } : {};
  const editMode = editing ? {} : { display: 'none' };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
          delTodo={delTodo} 
        />
        <button onClick={handleEditing}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        <span style={itemProp.completed ? completedStyle : {}}>
          {itemProp.title}
        </span>
      </div>
      <input
        type="text"
        ref={editInputRef}
        defaultValue={itemProp.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdateInput(e.target.value)}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
