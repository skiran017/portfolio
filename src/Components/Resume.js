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
            year={'Sept 2022 - till date'}
            title={'Fullstack Developer'}
            subTitle={'Amberley Tech'}
          />
          <ResumeItem
            year={'Jun 2022 - Sept 2022'}
            title={'Fullstack Developer'}
            subTitle={'Alekhine Labs'}
          />        
          <ResumeItem
            year={'Jan 2021 - Jul 2022'}
            title={'Frontend Engineer'}
            subTitle={'Dhan AI'}
          />
          <ResumeItem
            year={'Aug 2018 - Jan 2021'}
            title={'Software Engineer'}
            subTitle={'SSurya Immortal Power (OPC) Ltd.'}
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
