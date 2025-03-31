import styles from "@/styles/TodoParents.module.css";

export const TodoParents = () => {
  return (
    <div className={styles.ContainerChild}>
      <p>To-Do List</p>
      <div className={styles.ChildInput}>
        <input type="text" className={styles.ChildText} />
        <button className={styles.ChildButton}>Add</button>
      </div>
    </div>
  );
};
