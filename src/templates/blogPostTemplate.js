import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import SEO from 'react-seo-component';
import Utterances from 'react-utterances';
import styled from 'styled-components';
import Layout from '../components/Layout';
import { HappyButton } from '../components/Shared';
import { useSiteMetadata } from '../hooks/siteMetadata';

const repo = 'spences10/blog.scottspence.me';

// Title
// Date
// Content
// Navigation

const Title = styled.h1`
  margin: 0rem;
  padding: 0rem;
  font-family: ${({ theme }) => theme.fontHeader};
  color: ${({ theme }) => theme.secondary};
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`;

const TitleDate = styled.p`
  margin: 0rem;
  padding: 0rem;
  font-family: ${({ theme }) => theme.fontBody};
  color: ${({ theme }) => theme.fontLight};
  border-bottom: 1px solid ${({ theme }) => theme.background};
`;

const PostWrapper = styled.div`
  margin: 0.5rem;
  padding: 1.5rem;
  background: ${({ theme }) => theme.foreground};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  img {
    max-width: 100%;
    max-height: 100%;
  }
  font-family: ${props => props.theme.fontBody};
  color: ${props => props.theme.fontDark};
`;

const LinksWrapper = styled.div`
  display: grid;
  grid-template-areas: 'prev next';
`;

const LinkWrapper = styled.div`
  display: grid;
  justify-items: ${props => props.justify};
`;

const PrevNextButton = styled(HappyButton)`
  margin: 0.5rem 0rem;
  padding: 0.5rem;
  grid-area: ${props => props.area};
`;

export default ({ data, pageContext }) => {
  const { frontmatter, excerpt, body, path } = data.mdx;
  const { cover, date, title, isoDate } = frontmatter;
  const { prev, next } = pageContext;
  const { imageLink: defaultImage, siteUrl } = useSiteMetadata();
  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt || `nothin’`}
        image={
          cover === null
            ? `${siteUrl}${defaultImage}`
            : `${siteUrl}${cover.publicURL}`
        }
        pathname={path}
        article={true}
        publishedDate={new Date(isoDate).toISOString()}
      />
      {/* <Dump cover={cover} defaultImg={defaultImage} /> */}
      <PostWrapper>
        <Title>{title}</Title>
        <TitleDate>{date}</TitleDate>
        <MDXRenderer>{body}</MDXRenderer>
        <LinksWrapper>
          <LinkWrapper justify={'start'}>
            {prev === false ? null : (
              <div>
                {prev && (
                  <Link to={prev.frontmatter.path}>
                    <PrevNextButton area={'prev'}>
                      {prev.frontmatter.title}
                    </PrevNextButton>
                  </Link>
                )}
              </div>
            )}
          </LinkWrapper>
          <LinkWrapper justify={'end'}>
            {next === false ? null : (
              <div>
                {next && (
                  <Link to={next.frontmatter.path}>
                    <PrevNextButton area={'next'}>
                      {next.frontmatter.title}
                    </PrevNextButton>
                  </Link>
                )}
              </div>
            )}
          </LinkWrapper>
        </LinksWrapper>
        <Utterances repo={repo} type={'url'} />
      </PostWrapper>
    </Layout>
  );
};

// TODO: site metadata image
export const query = graphql`
  query($path: String!) {
    mdx(frontmatter: { path: { eq: $path } }) {
      body
      excerpt(pruneLength: 250)
      frontmatter {
        title
        path
        tags
        date(formatString: "YYYY MMMM Do")
        isoDate: date
        published
        cover {
          publicURL
          childImageSharp {
            sizes(maxWidth: 2000) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    }
  }
`;
