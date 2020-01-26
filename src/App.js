import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import Projects from "./components/Projects";

function App() {
  const softwareProjects = require("./data/projects.json");
  const displayProjects = softwareProjects.map((data, key) => {
    return (
      <Projects
        key={key}
        name={data.name}
        description={data.description}
        appLink={data.appLink}
        image={data.image}
        repoFrontLink={data.repoFrontLink}
        repoBackLink={data.repoBackLink}
      ></Projects>
    );
  });

  return (
    <div className="App">
      <div className="portfolio-projects card-group">
        <div className="headline-text">Software Engineering Projects</div>
        <hr className="rule" />
        <div className="card-row">{displayProjects}</div>
      </div>
    </div>
  );
}

export default App;
