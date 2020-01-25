import React from 'react';
import './Projects.css'

function Projects() {

	return (
    <div className="flip-card card">
      <div className="flip-card-inner">
        <div className="flip-card-front card-body">
          <a href="http://mousetrivia.magicaltech.xyz/" target="_blank">
            <img
              src={require("../images/mousetrivia-flip.png")}
              className="card-img-top flip-image img-fluid"
              alt="Avatar"
            />
          </a>
        </div>
        <div className="flip-card-back">
          <h2>Mouse Fan Trivia</h2>
          <p>
            Trivia game created with JS, CSS, and HTML.
            <br />
            <a
              href="https://github.com/wchrapcynski/trivia_game"
              target="_blank"
            >
            Repo
            </a>
            {" - "}
            <a href="http://mousetrivia.magicaltech.xyz/" target="_blank">
            Web App
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;