import styles from "./taskFrom.module.css";
import DateTimePicker from "react-datetime-picker";
// date and time picker css
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

function TaskFrom({ title, handleChange }) {
  // TODO: implement form functionality
  return (
    <section className={styles.main}>
      {/* Main header */}
      <h1>{title}</h1>
      {/* input from */}
      <form className={styles.form}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Name"
        />
        <textarea
          onChange={handleChange}
          name="description"
          placeholder="Description...."
          rows={10}
        ></textarea>
        <div style={{ width: "100%", height: "100%" }}>
          <DateTimePicker
            style={{ height: "auto" }}
            onChange={(e) => handleChange({ name: "date", date: e })}
            value={new Date()}
          />
        </div>

        <select onChange={handleChange} name="priority">
          <option name="priority" value='{"title": "Low", "color": "green"}'>
            Low
          </option>
          <option value='{"title": "Medium", "color": "yellow"}'>Medium</option>
          <option value='{"title": "High", "color": "red"}'>High</option>
        </select>
        <input
          name="tags"
          onChange={handleChange}
          type="text"
          placeholder="Work, Personal, Shopping"
        />
        <input type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default TaskFrom;
