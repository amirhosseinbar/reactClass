import React from "react";
import ReactDOM from "react-dom/client";
import TextArea from "./Components/TextArea";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <TextArea
      maxLength={23}
      minWidth={300}
      maxWidth={300}
      minHeight={100}
      maxHeight={150}
      placeholder="Enter Your Text"
    />
  </>
);
