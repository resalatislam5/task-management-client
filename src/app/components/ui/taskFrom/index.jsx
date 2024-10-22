import styles from "./taskFrom.module.css";
function TaskFrom({ title }) {
  // TODO: implement form functionality
  return (
    <section className={styles.main}>
      {/* Main header */}
      <h1>{title}</h1>
      {/* input from */}
      <form className={styles.form}>
        <input type="text" placeholder="Name" />
        <textarea placeholder="description...." rows={10}></textarea>
        <input type="text" placeholder="day-month-year" />
        <select name="" id="">
          <option value="">Low</option>
          <option value="">Medium</option>
          <option value="">High</option>
        </select>
        <input type="text" placeholder="Work, Personal, Shopping" />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default TaskFrom;
