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

  const deleteTask = (taskId) => {
    settaskList((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    const isConfermed = window.confirm(
      "Are you sure you want to delete this task ? "
    );
    if (isConfermed) {
    }
  };

  const clearComplete = () => {
    settaskList((prevTasks) => prevTasks.filter((task) => !task.isCompleted));
    const isCleared = window.confirm(
      "Are you sure you want to clear all completed tasks?"
    );
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
        <form className={styles.ChildInput}>
          <input
            type="text"
            placeholder="Add new a task..."
            className={styles.ChildText}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button
            type="submit"
            className={styles.ChildButton}
            onClick={handleTaskAddition}
          >
            Add
          </button>
        </form>

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
          <p
            style={{
              textDecoration: item.isCompleted ? "line-through" : "none",
            }}
          >
            {item.text}
          </p>
          <button
            className={styles.DeleteButton}
            onClick={() => deleteTask(item.id)}
          >
            Delete
          </button>
        </div>
      ))}

      {taskList.length > 0 && (
        <div className={styles.clearContainer}>
          <p className={styles.clearText}>
            {completedCount} of {taskList.length} tasks completed
          </p>
          <button className={styles.cleadRed} onClick={() => clearComplete()}>
            Clear Completed
          </button>
        </div>
      )}

      <div className={styles.footer}>
        <span>Powered by</span>
        <span className={styles.pineCone}> Pinecone academy</span>
      </div>
    </div>
  );
};
