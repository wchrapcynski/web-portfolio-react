import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

function SocialMedia(props) {
  if (props.external) {
    return (
      <>
        <div className='social-media-img'>
          <a href={props.link} target='_blank' rel='noopener noreferrer'>
            <img src={require(`../images/${props.image}`)} alt={props.name} />
          </a>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className='social-media-img'>
          <Link
            to={props.link}
            target='_blank'
            rel='noopener noreferrer'
            download>
            <img src={require(`../images/${props.image}`)} alt={props.name} />
          </Link>
        </div>
      </>
    );
  }
}

export default SocialMedia;
