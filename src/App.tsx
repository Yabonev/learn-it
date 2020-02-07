import React from "react";

import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./components/Home";
import AdminDashboardLayout from "./components/AdminDashboardLayout";
import About from "./components/About";
import CreateTopic from "./components/CreateTopic";
import CreateSubtopicForm from "./components/CreateSubtopicForm";

import "./App.css";
import CreateCodingTaskForm from "./components/CreateCodingTaskForm";

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/admin-dashboard" component={AdminDashboardLayout} />
        <Route path="/create-new-topic" component={CreateTopic} />
        <Route path="/create-new-subtopic" component={CreateSubtopicForm} />
        <Route
          path="/create-new-coding-task"
          component={CreateCodingTaskForm}
        />
      </HashRouter>
    </>
  );
}

export default App;
