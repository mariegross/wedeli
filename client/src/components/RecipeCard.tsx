import React from "react";
// Styles
import "../styles/RecipeCard.css";
// Assets
import Pancakes from "../assets/food6.jpg";
import Clock from "../assets/time.svg";
import Person from "../assets/person.svg";

// type Props = {
//   title: string;
//   portions: number;
//   duration: number;
//   tags: string[];
//   image: string;
// };

export const RecipeCard: React.FC = () => {
  return (
    <div className="RecipeCardWrapper">
      <div className="ImageContainer">
        <img src={Pancakes} alt="Pancakes" />
      </div>
      <article className="TextContainer">
        <section className="InformationContainer">
          <h3 className="RecipeCardTitle">Pancakes</h3>
          <div className="IconDetail">
            <img className="IconDetailImg" src={Person} alt="Person-Icon" />
            <p className="IconDetailText">2-3</p>
            <img className="IconDetailImg" src={Clock} alt="Clock-Icon" />
            <p className="IconDetailText">20 min</p>
          </div>
        </section>
        <section className="RecipeCardTagContainer">
          <div className="RecipeCardTag">
            <span className="RecipeCardTagText">Breakfast</span>
          </div>
          <div className="RecipeCardTag">
            <span className="RecipeCardTagText">Brunch</span>
          </div>
          <div className="RecipeCardTag">
            <span className="RecipeCardTagText">süß</span>
          </div>
          <div className="RecipeCardTag">
            <span className="RecipeCardTagText">vegan</span>
          </div>
        </section>
      </article>
    </div>
  );
};
