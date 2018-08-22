import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import config from '../../data/siteConfig'
import { siteMeta } from '../../data/siteMeta'
import styled from 'styled-components'

import Header from './Header'

const Wrapper = styled.div`
  margin: 0 auto;
  maxwidth: 960;
  padding: 0px 1.0875rem 1.45rem;
  paddingtop: 0;
`

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet title={config.nameContent} meta={siteMeta}>
          <html lang={config.siteLanguage} />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Wrapper>{children}</Wrapper>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
