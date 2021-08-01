import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../styles/Layouts';
import ReviewItem from './ReviewItem';
import Title from './Title';

function ReviewsSection() {
  return (
    <ReviewsSectionStyled>
      <Title title={'Reviews'} span={'Reviews'} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro.'
            }
          />
          <ReviewItem
            text={
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro.Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, porro.'
            }
          />
        </div>
      </InnerLayout>
    </ReviewsSectionStyled>
  );
}

const ReviewsSectionStyled = styled.section`
  .reviews{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1.5rem;
        width: 100%;
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
`;

export default ReviewsSection;
