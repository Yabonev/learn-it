import React from "react";

import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

import Home from "./components/Home";
import AdminDashboardLayout from "./components/AdminDashboardLayout";
import About from "./components/About";
import CourseDetails from "./components/CourseDetails";
import courses from "./data/courses";
import FirebaseDataRenderer from "./components/FirebaseComponent";

function App() {
  return (
    <>
      <HashRouter>
        <NavBar />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route
          path="/admin-dashboard"
          render={props => <AdminDashboardLayout {...props} courses={courses} />}
        />
        <Route
          path="/details"
          render={props => <CourseDetails {...props} course={courses[0]} />}
        />

        <Route path="/firebase" component={FirebaseDataRenderer} />
      </HashRouter>
    </>
  );
}

export default App;
