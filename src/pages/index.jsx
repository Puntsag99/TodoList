import { TodoParents } from "@/components/TodoParents";
import styles from "@/styles/TodoParents.module.css";
const Page = () => {
  return (
    <div className={styles.TodoContainer}>
      <TodoParents />
    </div>
  );
};

export default Page;
