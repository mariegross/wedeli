import React from "react";
import { useHistory } from "react-router-dom";
// Styles
import "../styles/Welcome.css";

function Welcome(): JSX.Element {
  const history = useHistory();

  return (
    <div className="WelcomeWrapper" onClick={() => history.push("/dashboard")}>
      <h1>WeDeli</h1>
      <p>Click to continue</p>
    </div>
  );
}

export default Welcome;
