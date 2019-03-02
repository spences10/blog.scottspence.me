import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from './SiteMetadata'

const SEO = ({ keywords, meta, description, title, image }) => {
  const {
    description: defaultDescription,
    imageLink: defaultImage,
    siteLanguage,
    title: defaultTitle,
    titleTemplate,
    twitterUsername
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${image || defaultImage}`
  }

  return (
    <Helmet
      htmlAttributes={{
        siteLanguage
      }}
      title={seo.title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: `description`,
          content: seo.description
        },
        {
          property: `og:title`,
          content: seo.title
        },
        {
          property: `og:description`,
          content: seo.description
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
          content: seo.imageLink
        },
        {
          name: `twitter:creator`,
          content: twitterUsername
        },
        {
          name: `twitter:title`,
          content: seo.title
        },
        {
          name: `twitter:description`,
          content: seo.description
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
