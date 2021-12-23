import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import Title from './Title';
import ProgressBar from './ProgressBar';

function Skills() {
  return (
    <SkillsStyled>
      <Title title={'My Skills'} span={'My Skills'} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar title={'HTML5'} width={'80%'} text={'80%'} />
          <ProgressBar title={'CSS/SCSS'} width={'80%'} text={'80%'} />
          <ProgressBar title={'STYLED COMPONENTS'} width={'80%'} text={'80%'} />
          <ProgressBar title={'JAVASCRIPT'} width={'75%'} text={'75%'} />
          <ProgressBar title={'REACT JS'} width={'80%'} text={'80%'} />
          <ProgressBar title={'REDUX-SAGA'} width={'70%'} text={'70%'} />
          <ProgressBar title={'MONGO DB'} width={'70%'} text={'70%'} />
          <ProgressBar title={'EXPRESS'} width={'70%'} text={'70%'} />
          <ProgressBar title={'NODE JS'} width={'70%'} text={'70%'} />
          <ProgressBar title={'REACT-NATIVE'} width={'65%'} text={'65%'} />
          <ProgressBar title={'SOLIDITY'} width={'60%'} text={'60%'} />
          <ProgressBar title={'WEB 3.0'} width={'60%'} text={'60%'} />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 2rem;
    @media screen and(max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default Skills;
