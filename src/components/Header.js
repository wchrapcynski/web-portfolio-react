import React from "react";
import "./components.css";
import SocialMedia from "./SocialMedia";

function Header() {
  const socialMediaLinks = require("../data/links.json");
  const displaySocialMediaLinks = socialMediaLinks.map((data, key) => {
    return (
      <SocialMedia
        name={data.name}
        link={data.link}
        image={data.image}
        external={data.external}
      />
    );
  });

  return (
    <>
      <div className='jumbotron container-fluid'>
        <div className='jumboTitle'>
          <h1 className='display-4'>William Chrapcynski</h1>
        </div>
        <div className='jumboMain'>
          <div className='leftJumbo'>
            <p className='lead'>
              A creative software engineer and maker who can construct the the
              necessary tools that will take your projects to another realm. My
              background in various technologies gives me the kind of
              perspective that can visualize the big picture and the ability to
              make the magic happen.
              <br />
              <a className='jumbo-email' href='mailto:wchrapcynski@gmail.com'>
                wchrapcynski@gmail.com
              </a>
            </p>
            <div className='social-media'>
              {displaySocialMediaLinks}
            </div>
          </div>
          <div className='rightJumbo'>
            <img
              src={require("../images/headshot.png")}
              alt='Headshot'
              width='350px'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
