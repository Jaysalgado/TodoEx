import React from 'react';
import styles from './Todo.module.scss';

const TodoView = ({ task, completed }) => {
  return (
    <div className={styles.view}>
      {task.title ? (
        <>
          <div className={styles.titleId}>
            <span>
              <strong>Title: </strong>
              {task.title}
            </span>
            <span>
              <strong>User Id: </strong>
              {task.id}
            </span>
          </div>
          <div className={styles.butnBox}>
            <div className={styles.delete}>Delete</div>
            {task.completed ? (
              <div className={styles.completed}>Completed</div>
            ) : (
              <div className={styles.complete} onClick={completed(task)}>
                Complete
              </div>
            )}
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default TodoView;
