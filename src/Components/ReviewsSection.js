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
  .reviews {
    display: flex;
  }
`;

export default ReviewsSection;
