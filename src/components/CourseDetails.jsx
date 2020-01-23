import React from "react";
import { Paper, Grid } from "@material-ui/core";

const styles = {
  container: {
    flexGrow: 1,
    height: "780px",
    display: "grid",
    alignItems: "center",
    justifyContent: "center"
  }
};

function CourseDetails(props) {
  return (
    <div style={styles.container}>
      <Grid container direction="column" spacing={0}>
        <Paper>
          <h4>ID : {props.course.id}</h4>
        </Paper>
        <Paper>
          <h4>Topic : {props.course.topic}</h4>
        </Paper>
        <Grid item />
        <Paper>
          <h4># Subtopics :{props.course.subtopicsCount}</h4>
        </Paper>
      </Grid>
    </div>
  );
}

export default CourseDetails;
