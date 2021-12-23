import React from 'react';
import styled from 'styled-components';
import Particle from '../Components/Particles';
import Facebookicon from '@material-ui/icons/Facebook';
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
          <a href="https://facebook.com/skiran017" className="icon i-facebook">
            <Facebookicon />
          </a>
          <a href="https://github.com/skiran017" className="icon i-github">
            <Githubicon />
          </a>
          <a
            href="https://linkedin.com/in/skiran017"
            className="icon i-linkedin"
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
      .i-facebook {
        &:hover {
          border: 2px solid #1877f2;
          color: #1877f2;
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
