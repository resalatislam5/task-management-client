import TaskFrom from "./components/ui/taskFrom";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.form_section}>
      <TaskFrom title={"Task Add"} />
    </div>
  );
};

export default Home;
