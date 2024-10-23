import Table from "./components/ui/table";
import TaskFrom from "./components/ui/taskFrom";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div>
      <div className={styles.form_section}>
        <TaskFrom title={"Task Add"} />
      </div>
      <div className={styles.table_section}>
        <Table title={"All Tasks"} />
      </div>
    </div>
  );
};

export default Home;
