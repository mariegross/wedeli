import React from "react";
import "../styles/Dashboard.css";
import { RecipeCard } from "../components/RecipeCard";

function Dashboard() {
  return (
    <div className="Wrapper">
      <h2 className="DashboardTitle">Lass dich inspirieren...</h2>
      <RecipeCard />
    </div>
  );
}

export default Dashboard;
