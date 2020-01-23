import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Toolbar,
  AppBar
} from "@material-ui/core";
import { Link } from "react-router-dom";

const NavBar: React.FC = _ => {
  return (
    <AppBar color="primary" position="static">
      <Toolbar>
        <List component="nav">
          <ListItem component="div">
            <ListItemText inset>
              <Typography color="inherit" variant="h3">
                <Link to="/">Home</Link>
              </Typography>
            </ListItemText>

            <ListItemText inset>
              <Typography color="inherit" variant="h3">
                <Link to="/admin-dashboard">Admin Panel</Link>
              </Typography>
            </ListItemText>

            <ListItemText inset>
              <Typography color="inherit" variant="h3">
                <Link to="/about"> About</Link>
              </Typography>
            </ListItemText>

            <ListItemText inset>
              <Typography color="inherit" variant="h3">
                <Link to="/details"> Course Details(static)</Link>
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;