import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from './SiteMetadata'

const SEO = ({ title, description, image, pathname, article }) => {
  const {
    title,
    description,
    image,
    siteUrl,
    imageLink,
    siteLanguage,
    titleTemplate
  } = useSiteMetadata()

  return (
    <Helmet
      htmlAttributes={{
        siteLanguage
      }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: description
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: description
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:image`,
          content: `${
            site.siteMetadata.siteUrl
          }icons/icon-512x512.png`
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: description
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    />
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false
}
