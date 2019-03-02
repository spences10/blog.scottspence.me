import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import useSiteMetadata from './SiteMetadata'

const SEO = ({
  title,
  description,
  image,
  keywords,
  meta,
  pathname
}) => {
  const {
    description: defaultDescription,
    imageLink: defaultImage,
    siteLanguage,
    siteUrl,
    title: defaultTitle,
    titleTemplate,
    twitterUsername
  } = useSiteMetadata()

  // assign default values if needed
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${image || defaultImage}`,
    url: `${siteUrl}${pathname || '/'}`
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
          content: `summary_large_image`
        },
        {
          name: `twitter:image`,
          content: seo.image
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

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  keywords: []
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}
