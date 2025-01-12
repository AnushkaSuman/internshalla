import React from "react";

export default function Result() {
  return (
    <div style={container}>
    <div style={resultStyle}>
      <h4>Your Result</h4>
      <p>All your insights & details in one place</p>
      <div style={scoreStyle}>
        <h2>136 / 240</h2>
        <p>76% ACCURACY</p>
      <p>
        Top Score: <strong>230</strong> (92% ACCURACY)
      </p>
      <button style={practiceButton}>Practice More</button>
      </div>
    </div>
    <div style={revisiteStyle}>
        <h4>Revisit Paper</h4>
        <p>Challenge your friend by simply sharing a link to this test</p>
        <button style={practiceButton}>Visit</button>
        </div>
    </div>
  );
}

const container = {
    height:"100vh",
    //display:"flex",
    //direction:"horizontal",
    justifyContent:"center",
    //alignItems:"center",
    backgroundColor:"#eef2f5",
    maxWidth:"20%"
}

const resultStyle = {
  background: "white",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  maxWidth:"100%",
  maxHeight:"70%",
  height:"60vh"
}; 

const scoreStyle = {
  marginTop: "20px",
  marginBottom: "20px",
};

const practiceButton = {
  background: "#4caf50",
  color: "white",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};
const revisiteStyle={
background: "white",
  padding: "20px",
  marginTop:"50px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  maxWidth:"100%",
  //maxHeight:"50%"
  height:"40vh",
  marginBottom:"20px"
}