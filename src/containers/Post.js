import React from 'react'
import { withRouteData, Link } from 'react-static'
// import Markdown from 'react-markdown'
import { Markdown } from 'react-smackdown'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { HappyButton } from '../components/Shared'

import {
  // Dump,
  formatDate
} from '../util/helpers'

import { nameContent } from '../siteMeta'

const PostWrapper = styled.div`
  margin: 0.5rem;
  padding: 0.5rem;
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
`

const ContentWrapper = styled.div`
  margin: 0.25rem;
  padding: 0.5rem;
  /* text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1); */
`

const PostTitle = styled.div`
  font-family: ${props => props.theme.fontHeader};
  font-size: 2rem;
  color: ${props => props.theme.secondary};
  margin: 0rem;
  padding: 0rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
`

const PostedDate = styled.p`
  margin: 0.05rem;
  /* padding: 0rem; */
  font-weight: bold;
  color: ${props => props.theme.fontLight};
`

const LinksWrapper = styled.div`
  display: grid;
  grid-template-areas: 'prev next';
`

const LinkWrapper = styled.div`
  display: grid;
  justify-items: ${props => props.justify};
`

const PrevNextButton = HappyButton.extend`
  margin: 0.5rem 0rem;
  padding: 0.5rem;
  grid-area: ${props => props.area};
`

const TagsWrapper = styled.div`
  list-style: none;
`

const TagsListItem = styled.li`
  display: inline;
`

const TagsButton = PrevNextButton.extend`
  margin-right: 0.5rem;
  padding-right: 0.5rem;
`

export default withRouteData(({ post, previousPost, nextPost }) => {
  const { relatedTags } = post
  return (
    <PostWrapper>
      <ContentWrapper>
        <article>
          <Helmet title={`${post.title} - ${nameContent}`} />
          <PostTitle>{post.title}</PostTitle>
          <PostedDate>
            Posted: {formatDate(post.dateAndTime)}
          </PostedDate>
          {/* <Dump
            prevTit={previousPost.title}
            prev={previousPost.slug}
            prevPub={previousPost.isPublished}
            nextTit={nextPost.title}
            next={nextPost.slug}
            nextPub={nextPost.isPublished}
            tags={relatedTags}
          /> */}
          <Markdown source={post.content} />
          Tagged with:
          <TagsWrapper>
            {relatedTags.map((tag, index) => {
              return (
                <TagsButton>
                  <TagsListItem key={index}>{tag.name}</TagsListItem>
                </TagsButton>
              )
            })}
          </TagsWrapper>
          <LinksWrapper>
            <LinkWrapper justify={'start'}>
              {previousPost.isPublished ? (
                <Link to={previousPost.slug}>
                  <PrevNextButton area={'prev'}>
                    {previousPost.title}
                  </PrevNextButton>
                </Link>
              ) : (
                ''
              )}
            </LinkWrapper>
            <LinkWrapper justify={'end'}>
              {nextPost.isPublished ? (
                <Link to={nextPost.slug}>
                  <PrevNextButton area={'next'}>
                    {nextPost.title}
                  </PrevNextButton>
                </Link>
              ) : (
                ''
              )}
            </LinkWrapper>
          </LinksWrapper>
        </article>
      </ContentWrapper>
    </PostWrapper>
  )
})
