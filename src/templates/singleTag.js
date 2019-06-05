import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';

const Container = styled.div`
  font-family: ${props => props.theme.fontBody};
  margin: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.foreground};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const List = styled.ul`
  margin: 0rem;
  padding: 0rem;
`;

const Tag = styled.li`
  margin: 0.5rem;
  padding: 0.5rem;
  font-weight: bold;
  display: inline-block;
  color: ${props => props.theme.fontLight};
  background: ${({ theme }) => theme.primary};
  /* border: 1px solid ${props => props.theme.border}; */
  box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 5px;
  transform: skew(-2deg); /* INVERSE SKEW */
  transition-delay: 0.2s;
  &:hover {
    transition-delay: 0.2s;
    transform: skew(2deg); /* SKEW */
  }
  border-radius: 4px;
`;

const SingleTagTemplate = ({ data, pageContext }) => {
  const { posts, tagName } = pageContext;
  return (
    <Layout>
      <Container>
        <div>Posts about {`${tagName}`}</div>
        <div>
          <List>
            {posts.map((post, index) => {
              return (
                <Tag key={index}>
                  <Link to={post.frontmatter.path}>
                    {post.frontmatter.title}
                  </Link>
                </Tag>
              );
            })}
          </List>
        </div>
      </Container>
    </Layout>
  );
};

export default SingleTagTemplate;
