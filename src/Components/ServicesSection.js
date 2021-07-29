import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ServiceCard from './ServiceCard';
import Title from './Title';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={'Services'} span={'services'} />
        <div className="services">
          <ServiceCard
            image={design}
            title={'Web Design'}
            paragraph={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, harum'
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={'Artificial Intelligence'}
              paragraph={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, harum'
              }
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={'Game Development'}
            paragraph={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, harum'
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
    .mid-card {
      margin: 0 1.2rem;
    }

    /* p {
      text-align: center;
    } */
  }
`;

export default ServicesSection;
