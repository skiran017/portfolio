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
              'Web designing is my profession as well as a hobby. I love what I do.'
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={chess}
              title={'Chess'}
              paragraph={
                'I was a chess player during school. It helps a lot in personal life as well as in professional life.   '
              }
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={'Video Games'}
            paragraph={
              'A getaway hobby and it also enhances my reflexive skills. The graphics these days are awesome.'
            }
          />
          <ServiceCard
            image={soccer}
            title={'Soccer'}
            paragraph={
              'I was Inter-school and Inter-College football player. It helps me stay fit and build endurance.'
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={garden}
              title={'Gardening'}
              paragraph={
                'A small step towards helping the environment. I have Roses, Cactus, and Tomatoes. If have participated in alot of activites where we planted saplings close to our college. '
              }
            />
          </div>
          <ServiceCard
            image={reading}
            title={'Reading'}
            paragraph={
              'I love reading articles not only related to web but also related to science.I have published one of my own in russian local journal and two in international journal. '
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
