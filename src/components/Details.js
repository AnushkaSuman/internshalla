import React from "react";
export default function Details() {
  return (
    <div style={detailsStyle} >
      <div style={blockStyle}>
        <h6>Improvements</h6>
        <p>Subject Understanding</p>
      </div>
      <div style={blockStyle}>
        <h6>Response Time</h6>
        <p>You are slow!</p>
      </div>
      <div style={blockStyle} >
        <h6>Approach Data</h6>
        <p>Based on Facts, Analysis, and Guess</p>
      </div>
      <div style={blockStyle} >
        <h6>Suggestions</h6>
        <div style={block}>
        <div style={time}>40 Sec</div>
        <div style={time}>1.5 min</div>
        <div  style={time}>3min</div>
        </div>
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
const time={
  flex:1,
  border:"dotted",
  gap:"5px"

}
const block={
  display:"flex",
}