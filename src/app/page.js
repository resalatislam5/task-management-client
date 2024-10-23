"use client";
import Table from "./components/ui/table";
import TaskFrom from "./components/ui/taskFrom";
import styles from "./home.module.css";
import useHome from "./hooks/useHome";

// TODO: All of Frontend works remain
// TODO: requerments here: https://github.com/ena-ema-technologies/front-end-recruitment-oct-24
const Home = () => {
  const { handleChange } = useHome();
  return (
    <div>
      <div className={styles.form_section}>
        <TaskFrom handleChange={handleChange} title={"Task Add"} />
      </div>
      <div className={styles.table_section}>
        <Table title={"All Tasks"} />
      </div>
    </div>
  );
};

export default Home;
