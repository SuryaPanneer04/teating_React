import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./../public/styles.css";

ReactDOM.render(<App />, document.getElementById("root"));

//2. Only show the Confirm Password input if userIsRegistered is false.
//Don't show it if userIsRegistered is true.
