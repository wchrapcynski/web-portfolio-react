import React from "react";
import "./Projects.css";

function Projects(props) {
  return (
    <div className="flip-card card">
      <div className="flip-card-inner">
        <div className="flip-card-front card-body">
          <a
            href="http://mousetrivia.magicaltech.xyz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={require(`../images/${props.image}`)}
              className="card-img-top flip-image img-fluid"
              alt="Avatar"
            />
          </a>
        </div>
        <div className="flip-card-back">
          <h2>{props.name}</h2>
          <p>
            {props.description}
            <br />
            <a
              href="https://github.com/wchrapcynski/trivia_game"
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo
            </a>
            {" - "}
            <a href={props.appLink} target="_blank" rel="noopener noreferrer">
              Web App
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
