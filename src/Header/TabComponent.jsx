import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "../Customer/CustomerForm";
import "../Customer/CustomerDashboard";
import "./Navbar.css";

function TabComponent() {
  return (
    <AppBar position="absolute" id="navbar">
      <Toolbar>
        <Typography id="head" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Tution App
        </Typography>
        <nav>
          <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
            <li style={{ display: "inline-block", marginRight: "10px" }}>
              <Link
                id="item"
                to="/customer-form"
                style={{ textDecoration: "none", color: "white" }}
              >
                Customer Form
              </Link>
            </li>
            <li style={{ display: "inline-block", marginRight: "10px" }}>
              <Link
                id="item"
                to="/customer-dashboard"
                style={{ textDecoration: "none", color: "white" }}
              >
                Customer Dashboard
              </Link>
            </li>
            <li style={{ display: "inline-block", marginRight: "10px" }}>
              <Link
                id="item"
                to="/supplier-form"
                style={{ textDecoration: "none", color: "white" }}
              >
                Supplier Form
              </Link>
            </li>
            <li style={{ display: "inline-block", marginRight: "10px" }}>
              <Link
                id="item"
                to="/supplier-dashboard"
                style={{ textDecoration: "none", color: "white" }}
              >
                Supplier Dashboard
              </Link>
            </li>
          </ul>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default TabComponent;
