import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';
import { useSiteMetadata } from '../../hooks/siteMetadata';
import { Facebook } from './facebook';
import { Twitter } from './twitter';

export const SEO = ({
  article,
  title,
  description,
  image,
  pathname,
}) => {
  const {
    description: defaultDescription,
    imageLink: defaultImage,
    siteLanguage,
    siteLocale,
    siteUrl,
    title: defaultTitle,
    titleTemplate,
    twitterUsername,
  } = useSiteMetadata();

  const imagePath = `${siteUrl}${image.publicURL}`;

  // assign default values if needed
  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${imagePath || defaultImage}`,
    url: `${siteUrl}${pathname || '/'}`,
  };

  return (
    <>
      <Helmet title={seo.title} titleTemplate={titleTemplate}>
        <html lang={siteLanguage} />
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="blog-scott-spence" content="Scott Spence Blog" />
        {/* Insert schema.org data conditionally (webpage/article) + everytime (breadcrumbs) */}
        {/* {!article && <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>} */}
        {/* {article && <script type="application/ld+json">{JSON.stringify(schemaArticle)}</script>} */}
        {/* <script type="application/ld+json">{JSON.stringify(breadcrumb)}</script> */}
      </Helmet>
      <Facebook
        desc={seo.description}
        image={seo.image}
        title={seo.title}
        type={article ? 'article' : 'website'}
        url={seo.url}
        locale={siteLocale}
      />
      <Twitter
        title={seo.title}
        image={seo.image}
        desc={seo.description}
        username={twitterUsername}
      />
    </>
  );
};

SEO.defaultProps = {
  siteLanguage: `en`,
  keywords: [],
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  keywords: PropTypes.arrayOf(PropTypes.string),
  meta: PropTypes.array,
  pathname: PropTypes.string,
};
