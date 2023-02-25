import React from "react";
import ReactDOM from "react-dom/client";
import natureImg from "./assets/img/nature.jpg";

const root = ReactDOM.createRoot(document.getElementById("root"));
const imgStyle = {
  borderRadius: 10,
  width: "300px",
};
const parentDiv = {
  borderRadius: 10,
  backgroundColor : "#F5EAEA" ,
  width : "500px" ,
  textAlign : "center" ,
  padding : "20px 5px"
}


root.render(
  <>
    <div style={parentDiv}>
      <img style={imgStyle} src={natureImg} alt="natureImg" />
      <h4>This is Nature</h4>
    </div>
  </>
);
