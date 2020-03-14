import React from "react";
import "./components.css";

function SocialMedia(props) {
  return (
    <div className="social-media-item">
      <div className="social-media-img">
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <img src={require(`../images/${props.image}`)} alt={props.name} />
        </a>
      </div>
      <div className="social-media-text">
        {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      </div>
    </div>
  );
}

export default SocialMedia;
