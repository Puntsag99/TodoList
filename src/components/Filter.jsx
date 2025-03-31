import styles from "@/styles/filter.module.css";

const buttons = [
  { name: "Button 1", width: "38px", height: "32px", description: "All" },
  { name: "Button 2", width: "60px", height: "32px", description: "Active" },
  { name: "Button 3", width: "87px", height: "32px", description: "Completed" },
];

export const Filter = () => {
  return (
    <div className={styles.filterButton}>
      {buttons.map((item, index) => (
        <button
          key={index}
          className={styles.buttonCont}
          style={{ width: item.width, height: item.height }}
        >
          {item.description}
        </button>
      ))}
    </div>
  );
};
