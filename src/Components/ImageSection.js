import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        {/* image w:760; h:670 */}
        <img src={resume} alt="resumeImage" />
      </div>
      <div className="right-content">
        <h4>
          I am <span>Sai Kiran</span>
        </h4>

        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati non
          veritatis aspernatur.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            <p>Services</p>
          </div>
          <div className="info">
            <p>: Sai Kiran</p>
            <p>: 26</p>
            <p>: Indian</p>
            <p>: English, Hindi, Russian</p>
            <p>: Hyderabad, India</p>
            <p>: Full-stack Web Development</p>
          </div>
        </div>
        <PrimaryButton title={'Download CV'} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  display: flex;
  /* margin-top: 5rem; */
  margin-top: 2.5rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }

  .left-content {
    width: 100%;
    height: 60vh;
    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right-content {
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.5rem;

      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
