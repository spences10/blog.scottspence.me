import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'

const Container = styled.div`
  font-family: ${props => props.theme.fontBody};
  margin: 1rem;
  padding: 1rem;
  background: ${({ theme }) => theme.foreground};
  border: 1px solid ${props => props.border};
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`

const List = styled.ul`
  margin: 0rem;
  padding: 0rem;
`

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
`

const AllTagsTemplate = ({ data, pageContext }) => {
  const { tags } = pageContext
  return (
    <Layout>
      <Container>
        <List>
          {tags.map((tagName, index) => {
            return (
              <Tag key={index}>
                <Link to={`/tags/${tagName}`}>{tagName}</Link>
              </Tag>
            )
          })}
        </List>
      </Container>
    </Layout>
  )
}

export default AllTagsTemplate
