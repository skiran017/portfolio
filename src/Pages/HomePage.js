import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particles';
import Twittericon from '@material-ui/icons/Twitter';
import Githubicon from '@material-ui/icons/GitHub';
import LinkedInicon from '@material-ui/icons/LinkedIn';

function HomePage() {
  return (
    <HomepageStyled>
      <div className="p-particles-js">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hi, I'm <span> Sai Kiran </span>
        </h1>
        <p>
          A Front-end web developer, Blockchain enthusiast and passionate about
          technology from Hyderabad, India.
        </p>
        <div className="icons">
          <a href="https://twitter.com/skiran017" className="icon i-twitter" target='_blank' rel="noreferrer">
            <Twittericon />
          </a>
          <a href="https://github.com/skiran017" className="icon i-github" target='_blank' rel="noreferrer">
            <Githubicon />
          </a>
          <a
            href="https://linkedin.com/in/skiran017"
            className="icon i-linkedin"
            target='_blank' rel="noreferrer"
          >
            <LinkedInicon />
          </a>
        </div>
      </div>
    </HomepageStyled>
  );
}

const HomepageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  
  }
  .p-particles-js {
    position: absolute;
    top: 0;
    left: 0;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-twitter {
        &:hover {
          border: 2px solid rgb(29, 155, 240);
          color: rgb(29, 155, 240);
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #9f7be1;
          color: #9f7be1;
        }
      }
      .i-linkedin {
        &:hover {
          border: 2px solid #0a66c2;
          color: #0a66c2;
        }
      }
    }
  }
`;

export default HomePage;
