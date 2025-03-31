import styles from "@/styles/TodoParents.module.css";
import { useState } from "react";
import { Filter } from "./Filter";

export const TodoParents = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskList, settaskList] = useState([]);

  const handleTaskAddition = (event) => {
    event.preventDefault();

    if (!inputValue) {
      alert("Please enter a task!");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: inputValue,
      isCompleted: false,
    };

    settaskList([newTask, ...taskList]);
    setInputValue("");
  };

  return (
    <div className={styles.ContainerChild}>
      <p className={styles.ToDotext}>To-Do List</p>

      <div className={styles.FilterCont}>
        <div className={styles.ChildInput}>
          <input
            type="text"
            placeholder="Add new a task..."
            className={styles.ChildText}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button className={styles.ChildButton} onClick={handleTaskAddition}>
            Add
          </button>
        </div>

        <Filter />
      </div>

      <p className={styles.Ptext}>No tasks yet.Add one above!</p>

      {taskList.map((item, index) => (
        <div className={styles.TaskInput}>
          <input key={index} type="text" className={styles.checkBox} />
          <p>{item.text}</p>
          <button className={styles.DeleteButton}>Delete</button>
        </div>
      ))}
    </div>
  );
};
