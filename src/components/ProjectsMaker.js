import React from 'react';
import "./components.css"

function ProjectsMaker(props) {
  return (
    <React.Fragment>
      <div className="card">
        <a
          href={props.link}
          target="_blank" rel="noopener noreferrer">
          <img
            src={require(`../images/${props.image}`)}
            className="card-img-top"
            alt="mini arcade"
            title="Click for video" />
        </a>
        <div className="card-body">
          <h5 className="card-title">
            <a
              href={props.link}
              target="_blank" rel="noopener noreferrer">
              <img className="card-youtube-icon" src={require("../images/youtube.png")} alt="Youtube Link" />
              {props.name}
            </a>
          </h5>
          <p className="card-text">
            {props.description}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProjectsMaker;