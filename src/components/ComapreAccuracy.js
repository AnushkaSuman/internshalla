import React from "react";

export default function CompareAccuracy() {
  return (
    <div style={compareStyle}>
      <div style={chartBox}>Compare Accuracy</div>
      <div style={chartBox}>Compare Accuracy</div>
      <div style={chartBox}>Compare Accuracy</div>
    </div>
  );
}

const compareStyle = {
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
};
const chartBox = {
  background: "#f1f1f1",
  height: "200px",
  borderRadius: "10px",
  flex: "1",
  textAlign: "center",
  lineHeight: "100px",
};
