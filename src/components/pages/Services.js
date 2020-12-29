import React from "react";
import CardItem from "../CardItem";
import "../Cards.css";
import "../../App.css";

export default function Services() {
  return (
    <>
    <div className="hero-container">
      <h1>JACK TRANSUE</h1>
      <p className="description-about">As a full stack engineer with a creative background, I seek out intuitive and innovative coding solutions for companies so they can focus on the big picture.<br></br><br></br>

I have extensive professional experience blending new technology with video editing and animation. After establishing automation technologies that connect designer animations to large scale ad deliveries, I focused on bridging the gap between conventional advertising with HTML advertisements. As my career became more tech focused, I decided to further my understanding of front end JavaScript libraries through completing a Web Development bootcamp and pursuing opportunities in full stack engineering.

Feel free to message me here on LinkedIn to discuss opportunities!<br></br><br></br>

My expertise includes Javascript, React, MongoDB, AXIOS, NodeJs, ExpressJs, ES6, HTML & CSS </p>
    </div>
    <div className="cards_container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/img-1.jpg"
              text="LinkedIn"
              path="/linkedin"
            />
            <CardItem
              src="images/img-2.jpg"
              text="GitHub"
              path="/github"
            />
          </ul>
        </div>
      </div>
    </>  
  )
}
