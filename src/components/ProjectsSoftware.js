import React from "react";
import "./components.css";

function ProjectsSoftware(props) {
  function displayRepos() {
    if (props.repoBackLink) {
      	return (
		<>
			<a href={props.repoFrontLink} target="_blank" rel="noopener noreferrer">Front End</a>{" - "}
			<a href={props.repoBackLink} target="_blank" rel="noopener noreferrer">Back End</a>
		</>
		);
    } else {
    	return (
		<a href={props.repoFrontLink} target="_blank" rel="noopener noreferrer">Repo</a>
		);}
	}

  return (
    <>
      <div className="flip-card card">
        <div className="flip-card-inner">
          <div className="flip-card-front card-body">
            <a href="http://mousetrivia.magicaltech.xyz/" target="_blank" rel="noopener noreferrer">
			  	<img src={require(`../images/${props.image}`)} className="card-img-top flip-image img-fluid" 
			  	alt="Avatar" />
            </a>
          </div>
          <div className="flip-card-back">
            <h3>{props.name}</h3>
            <p>
              	{props.description}
              	<br />
              	{displayRepos()}
             	<br />
              	{props.appLink ? <a href={props.appLink} target="_blank" rel="noopener noreferrer">Web App</a>: ""}
            </p>
          </div>
        </div>
      </div>
      <div className="flip-card-desc">
        <h2>{props.name}</h2>
        <p>
        	{props.description}
        	<br />
        	{displayRepos()}
        	<br />
			{props.appLink ? <a href={props.appLink} target="_blank" rel="noopener noreferrer">
            Web App</a>: ""}
        </p>
      </div>
    </>
  );
}

export default ProjectsSoftware;
