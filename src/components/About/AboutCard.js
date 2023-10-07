import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="aboutc" >
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" , color : "white" }}>
            Hi Everyone, I am <span className="purple">Onwanya Sakharet </span>
            from <span className="purple"> Thailand .</span>
            <br />I am a student in Burapha University.
            <br />You can call me Jane , My major was Information Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity" style={{ color : "MediumPurple" }}>
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity" style={{ color : "MediumPurple" }}>
              <ImPointRight /> Travelling
            </li>
          </ul>
         
        </blockquote>
      </Card.Body>
    </Card>
  </div>
  );
}

export default AboutCard;
