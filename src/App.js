import React from "react";
import "./App.css";
import "./bootstrap.min.css";
import Header from "./components/Header";
import ProjectsSoftware from "./components/ProjectsSoftware";
import ProjectsMaker from "./components/ProjectsMaker";
import BlogThree from "./components/BlogThree";
import Footer from "./components/Footer";

function App() {
  const softwareProjectsData = require("./data/projectsSoftware.json");
  const makerProjectsData = require("./data/projectsMaker.json");

  const displayProjectsSoftware = softwareProjectsData.map((data, key) => {
    return (
      <ProjectsSoftware
        key={key}
        name={data.name}
        description={data.description}
        appLink={data.appLink}
        image={data.image}
        repoFrontLink={data.repoFrontLink}
        repoBackLink={data.repoBackLink}
      />
    );
  });

  const displayProjectsMaker = makerProjectsData.map((data, key) => {
    return (
      <ProjectsMaker
        key={key}
        name={data.name}
        description={data.description}
        link={data.link}
        image={data.image}
      />
    );
  });

  return (
      <>
        <Header />
        <div className='App'>
          <div className='portfolio-projects card-group'>
            <div className='headline-text'>Software Engineering Projects</div>
            <hr className='rule' />
            <div className='card-row'>{displayProjectsSoftware}</div>
          </div>
          <div className='portfolio-projects card-group'>
            <div className='headline-text'>Greetings Program</div>
            <hr className='rule' />
            <p>
              This engineer is more than meets the eye. There are a number of
              paths that lead into the world of software development. Here are
              just a sample of the things that got me to where I am today:
            </p>
            <div className='portfolio-projects card-group container'>
              {displayProjectsMaker}
            </div>
          </div>
        </div>
        <BlogThree />
        <Footer />
      </>
  );
}

export default App;
