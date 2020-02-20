import React from "react";

import Home from "./components/Home";
import About from "./components/About";
import AdminDashboard from "./pages/AdminDashboard";
import CreateTopic from "./components/forms/CreateTopicForm";
import CreateSubtopicForm from "./components/forms/CreateSubtopicForm";
import CreateCodingTaskForm from "./components/forms/CreateCodingTaskForm";
import MasterForm from "./components/forms/MasterForm";

import { Link, HashRouter, Route } from "react-router-dom";

import { List, ListItemText, Typography, AppBar } from "@material-ui/core";
import { CSSProperties } from "@material-ui/styles";

const styles = {
  navbar: {
    display: "flex"
  } as CSSProperties
};

function App() {
  const navigationLinks = [
    { to: "/", title: "Home" },
    { to: "admin-dashboard", title: "Admin Dashboard" },
    { to: "about", title: "About" },
    { to: "create-new-topic", title: "Create Topic" },
    { to: "create-new-subtopic", title: "Create Subtopic" },
    { to: "create-new-coding-task", title: "Create Coding Task" },
    { to: "master-form", title: "Master form" }
  ];

  const linksHtml = navigationLinks.map(link => (
    <ListItemText key={link.title} inset>
      <Link to={link.to}>
        <Typography variant="h4" align="center" color="textPrimary">
          {link.title}
        </Typography>
      </Link>
    </ListItemText>
  ));

  return (
    <>
      <HashRouter>
        <AppBar position="static">
          <List component="nav" style={styles.navbar}>
            {linksHtml}
          </List>
        </AppBar>

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        <Route path="/create-new-topic" component={CreateTopic} />
        <Route path="/create-new-subtopic" component={CreateSubtopicForm} />
        <Route
          path="/create-new-coding-task"
          component={CreateCodingTaskForm}
        />
        <Route path="/master-form" component={MasterForm} />
      </HashRouter>
    </>
  );
}

export default App;
