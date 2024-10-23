import Link from "next/link";
import styles from "./table.module.css";
function Table({ title }) {
  return (
    <div className={styles.main}>
      <h1>{title}</h1>
      <div style={{ overflowX: "auto" }}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Due date</th>
              <th>Priority</th>
              <th>Tags</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((e, i) => (
              <tr key={i}>
                <td>Resalat</td>
                <td>I wiil do ....</td>
                <td>10-12-2026</td>
                <td>medium</td>
                <td>tag1, tag2</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button>Delete</button>
                </td>
                <td>
                  <button>Completed</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link className={styles.seeMore} href="/all-tasks">
          See More
        </Link>
      </div>
    </div>
  );
}

export default Table;
