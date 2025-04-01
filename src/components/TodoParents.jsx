import styles from "@/styles/TodoParents.module.css";
import { useState } from "react";
import { Filter } from "./Filter";

export const TodoParents = () => {
  const [inputValue, setInputValue] = useState("");
  const [taskList, settaskList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

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

  const completedCount = taskList.filter((task) => task.isCompleted).length;

  const toggleComplete = (taskId) => {
    settaskList((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  const filteredTasks = taskList.filter((task) => {
    if (filterStatus === "Active") return !task.isCompleted;
    if (filterStatus === "Completed") return task.isCompleted;
    return true;
  });

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

        <Filter setFilterStatus={setFilterStatus} />
      </div>

      {taskList.length === 0 && (
        <p className={styles.Ptext}>No tasks yet. Add one above!</p>
      )}

      {filteredTasks.map((item, index) => (
        <div key={index} className={styles.TaskInput}>
          <input
            type="checkbox"
            className={styles.checkBox}
            checked={item.isCompleted}
            onChange={() => toggleComplete(item.id)}
          />
          <p>{item.text}</p>
          <button className={styles.DeleteButton}>Delete</button>
        </div>
      ))}

      {taskList.length > 0 && (
        <div className={styles.clearContainer}>
          <p className={styles.clearText}>
            {completedCount} of {taskList.length} tasks completed
          </p>
          <button className={styles.cleadRed}>Clear Completed</button>
        </div>
      )}

      <div className={styles.footer}>
        <span>Powered by</span>
        <span className={styles.pineCone}> Pinecone academy</span>
      </div>
    </div>
  );
};
