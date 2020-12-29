import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Selected Projects</h1>
      <div className="cards_container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-4.jpg"
              text="CoHab - Your Home Task Manager"
              label="full-stack"
              path="/cohab"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Google Maps farmers market agregator for Portugal"
              label="full-stack"
              path="/local-e"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-5.jpg"
              text="Office Space: The Game - Vanilla Javascript choose your own adventure game"
              label="gaming"
              path="/office-space"
            />
            <CardItem
              src="images/img-6.jpg"
              text="Google Holiday SVG Animation"
              label="SVG Animation"
              path="/holiday1"
            />
            <CardItem
              src="images/img-7.jpg"
              text="Google Holiday SVG Animation variation 2"
              label="SVG Animation"
              path="/holiday2"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
