import React from "react";

const styles = {
  container: {
    height: "780px",
    display: "grid",
    alignItems: "center",
    justifyContent: "center",
    padding: "2em"
  },
  table: {
    margin: "1em",
    border: "1px solid black"
  }
};

function AdminDashboard(props) {
  return (
    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr key={0}>
            <th>ID</th>
            <th>Topic</th>
            <th># subtopics</th>
          </tr>
        </thead>
        <tbody>
          {props.courses.map(c => (
            <tr
              key={c.id}
              onClick={e => {
                alert("You clicked a topic, you crazy son of a bitch!");
              }}
            >
              <td>{c.id}</td>
              <td>{c.topic}</td>
              <td>{c.subtopicsCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
