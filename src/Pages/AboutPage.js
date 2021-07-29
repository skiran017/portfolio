import React from 'react';
import styled from 'styled-components';
import ServicesSection from '../Components/ServicesSection';
import Title from '../Components/Title';
import { MainLayout } from '../styles/Layouts';
import ImageSection from '../Components/ImageSection';
import ReviewsSection from '../Components/ReviewsSection';

function Aboutpage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={'About Me'} span={'about me'} />
        <ImageSection />
        <ServicesSection />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section``;

export default Aboutpage;
