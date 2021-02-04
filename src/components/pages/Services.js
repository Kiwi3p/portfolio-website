import React from "react";
import CardItem from "../CardItem";
import CardItemv2 from "../CardItemv2";
import "../Cards.css";
import "../../App.css";
import "./Services.css";
import Game from "./Game";

export default function Services() {
  return (
    <>
      <Game />
      {/* <div className="about-me">
        <img src="./images/img-1.jpg" />
        <div className="text-content-about">
          <h1>About Me</h1>
          <p className="description-about">
            I am a full Stack Engineer with an emphasis on creative technology.
            After working at an advertising startup that emphasized integrating
            creative with web applications, I decided to fully commit to being a
            Full-Stack Engineer by attending IronHack bootcamp in Lisbon
            Portugal. <br></br><br></br>As someone who studied creative media in college while
            also taking computer science courses, I’ve always had an interest
            software engineering. When my last job finally asked me to
            creatively apply JavaScript to advertisements, I knew now was the
            time to fully become a full stack engineer. <br></br><br></br>As a creative, I’ve
            always had to take on as many diverse tasks as possible, which is
            why Full-Stack engineering feels like the perfect fit. The fact that
            it combines both Front End and Back End technologies makes me feel
            right at home with my previous experience juggling creative design
            collaboratively and applying those designs to technologies for
            deployment. Personally for me, it is always important that I keep
            myself well rounded and in tune with both front and back end teams
            to continue to innovate on the technologies and projects. All I ask
            from companies that I work for is that they too attempt to keep
            pushing itself forward and creatively innovate.
            <br></br>
            <br></br>
            My expertise includes Javascript, React, MongoDB, AXIOS, NodeJs,
            ExpressJs, ES6, HTML & CSS{" "}
          </p>
        </div>
      </div> */}
      <div className="cards_container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem src="images/li.png" text="LinkedIn" path="/linkedin" />
            <CardItem src="images/img-2.jpg" text="GitHub" path="/github" />
          </ul>
        </div>
      </div>
    </>
  );
}
