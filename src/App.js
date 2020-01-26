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
      ></Projects>
    );
  });

  return <div className="App">{displayProjects}</div>;
}

export default App;
