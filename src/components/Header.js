import React from "react";

export default function Header() {
  return (
    <header style={headerStyle}>
      <h1>Firstbench</h1>
      <nav style={navStyle}>
        <a href="#">Dashboard</a>
        <a href="#">FirstGuru</a>
        <a href="#">TownHall</a>
        <a href="#">AI Evaluation</a>
        <a href="#">Performance</a>
        <a href="#">Mock Test</a>
      </nav>
      <button style={profileButton}>Profile</button>
    </header>
  );
}

const headerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#4e73df",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
};

const navStyle = {
  display: "flex",
  gap: "15px",
};

const profileButton = {
  background: "white",
  color: "#4e73df",
  border: "none",
  padding: "5px 10px",
  borderRadius: "5px",
};