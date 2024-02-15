import React from 'react';
import styles from './Todo.module.scss';

const TodoList = ({ list, onTaskClick }) => {
  return (
    <div className={styles.list}>
      {list.map((item) => {
        return (
          <div
            className={styles.task}
            key={item.id}
            onClick={() => onTaskClick(item)}
          >
            {item.title}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
