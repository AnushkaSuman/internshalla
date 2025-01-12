import React from "react";

export default function TimeTaken() {
  return (
    <div style={detailsStyle}>
      <div style={blockStyle}>
        <h6>Compare Accuracy</h6>
        <p>Subject Understanding</p>
      </div>
      <div style={blockStyle}>
        <h6>TimeTaken</h6>
        <p>You are slow!</p>
      </div>
    </div>
  );
}
const detailsStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
  };
  
  const blockStyle = {
    background: "#ffffff",
    padding: "15px",
    borderRadius: "10px",
    height:"200px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    flex: "1",
    margin: "0 10px",

  };