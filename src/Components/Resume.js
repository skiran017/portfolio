import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import SmallTitle from './SmallTitle';
import Title from './Title';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import ResumeItem from './ResumeItem';

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={'Resume'} span={'Resume'} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={'Working Experience'} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={'2021 - till date'}
            title={'Frontend Engineer'}
            subTitle={'Dhan AI'}
          />
          <ResumeItem
            year={'2018 - 2020'}
            title={'Subject Matter Expert -TRON'}
            subTitle={'Amazon India'}
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={'Educational Qualifications'} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={'2014 - 2018'}
            title={'Bachelors in Mechanical Engineering'}
            subTitle={'Tomsk Polytechnic University'}
            text={'Tomsk, Russian Federation.'}
          />
          <ResumeItem
            year={'2007 - 2013'}
            title={'High School and Senior High School'}
            subTitle={'Little Flower School and College'}
            text={'Hyderabad, India.'}
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
