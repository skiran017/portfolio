import React from 'react';
import styled from 'styled-components';
import resume from '../img/resume.jpg';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
  const currentYear = new Date().getFullYear();
  const currentAge = currentYear - 1995;

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
          A fun loving guy. I find it facinating how technology is changing.
          <br />
          Recently I developed passion for Web3.0 and stared to explore the
          Meta-verse and building some exiting projects.
          <br />
          When I am not coding, I love to spend time playing chess and taking
          care of the plants or planting new ones.
          <br />
          Apart from that I like to learn and cook different cuisines Italian,
          Indian, Indonesian, and Russian.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Location</p>
            {/* <p>Post</p> */}
          </div>
          <div className="info">
            <p>: Sai Kiran Sabavath</p>
            <p>: {currentAge}</p>
            <p>: Indian</p>
            <p>: English, Hindi, Russian, German</p>
            <p>: Hyderabad, India</p>
            {/* <p>: Full-stack Web Development</p> */}
          </div>
        </div>
        <ButtonWrapper>
          <PrimaryButton
            title={'Download CV'}
            link="/portfolio/kiri_resume.pdf"
          />
        </ButtonWrapper>
      </div>
    </ImageSectionStyled>
  );
}

const ButtonWrapper = styled.div`
  @media screen and (max-width: 1000px) {
    display: flex;
    justify-content: center;
  }
`;

const ImageSectionStyled = styled.div`
  display: flex;
  /* margin-top: 5rem; */
  margin-top: 2.5rem;
  @media screen and (max-width: 1000px) {
    flex-direction: column;

    .left-content {
      margin-bottom: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  .left-content {
    width: 100%;
    /* height: 60vh; */
    img {
      width: 90%;
      height: 100%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;

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
