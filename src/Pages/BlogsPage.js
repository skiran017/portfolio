import React from 'react';
import styled from 'styled-components';
import { MainLayout, InnerLayout } from '../styles/Layouts';
import Title from '../Components/Title';

import blogs from '../data/blogs';

function BlogsPage() {
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={'Blogs'} span={'Blogs'} />
        <InnerLayout className={'blog'}>
          {blogs.map((blog) => {
            return (
              <div key={blog.id}>
                <img src={blog.image} alt="blogImage" />
                <div className="title">
                  <h4>{blog.title}</h4>
                </div>
              </div>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    .image {
      width: 100%;
      height: 70%;
      img {
        width: 100%;
      }
    }
  }
`;

export default BlogsPage;