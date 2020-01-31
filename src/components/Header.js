import React from "react";
import { Link } from "react-router-dom";
import "./components.css";

function Header() {
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
              <a className='jumbo-email' href='mailto:wchrapcynski@gmail.com'>wchrapcynski@gmail.com</a>
            </p>
            <div className='social-media'>
              <div className='social-media-img'>
                <a
                  href='https://www.linkedin.com/in/william-chrapcynski/'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={require("../images/socialmedia-linkedin.svg")}
                    alt='linkedin'
                  />
                </a>
              </div>
              <div className='social-media-img'>
                <a
                  href='https://github.com/wchrapcynski'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={require("../images/socialmedia-github.svg")}
                    alt='linkedin'
                  />
                </a>
              </div>
              <div className='social-media-img'>
                <a
                  href='https://medium.com/@williamchrapcynski'
                  target='_blank'
                  rel='noopener noreferrer'>
                  <img
                    src={require("../images/socialmedia-medium.svg")}
                    alt='linkedin'
                  />
                </a>
              </div>
              <div className='social-media-img'>
                <Link
                  to='./WilliamChrapcynski-Resume-se.pdf'
                  target='_blank'
                  rel='noopener noreferrer'
                  download>
                  <img src={require("../images/resume.svg")} alt='resume' />
                </Link>
              </div>
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
