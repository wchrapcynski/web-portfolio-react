import React from 'react';
import "./components.css"

function ProjectsMaker(props) {

	return (
    <React.Fragment>
          <div class="card">
            <a
              href="https://www.youtube.com/watch?v=wwPKy6Gn710"
              target="_blank"
            >
              <img
                src={require("../images/icon-arcade.png")}
                class="card-img-top"
                alt="mini arcade"
                title="Click for video"
              />
            </a>
            <div class="card-body">
              <h5 class="card-title">
                <a
                  href="https://www.youtube.com/watch?v=wwPKy6Gn710"
                  target="_blank"
                >
                  <img src={require("../images/youtube.png")} alt="Youtube Link" /> Mini
                  Arcade</a
                >
              </h5>
              <p class="card-text">
                I'm a maker and I enjoy building something with my own two
                hands. This is a mini-arcade machine that I build using a
                Raspberry Pi and various prototyping techniques.
              </p>
            </div>
          </div>
    </React.Fragment>
  );
}

export default ProjectsMaker;