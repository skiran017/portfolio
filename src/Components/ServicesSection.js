import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ServiceCard from './ServiceCard';
import Title from './Title';
import design from '../img/design.svg';
import chess from '../img/chess.svg';
import soccer from '../img/soccer.svg';
import garden from '../img/garden.svg';
import reading from '../img/reading.svg';
import gamedev from '../img/game-dev.svg';

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={'Hobbies'} span={'hobbies'} />
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
              image={chess}
              title={'Chess'}
              paragraph={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, harum'
              }
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={'Video Games'}
            paragraph={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, harum'
            }
          />
          <ServiceCard
            image={soccer}
            title={'Soccer'}
            paragraph={
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, harum'
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={garden}
              title={'Gardening'}
              paragraph={
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, harum'
              }
            />
          </div>
          <ServiceCard
            image={reading}
            title={'Reading'}
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
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
