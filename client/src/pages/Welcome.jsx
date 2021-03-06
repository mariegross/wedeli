import React from "react";
import { useHistory } from "react-router-dom";
// Styles
import "../styles/Welcome.css";

function Welcome() {
  const history = useHistory();

  return (
    <div className="WelcomeWrapper" onClick={() => history.push("/dashboard")}>
      <h1 className="Logo">WeDeli</h1>
      <p className="WelcomeSubtitle">Click to continue</p>
    </div>
  );
}

export default Welcome;
