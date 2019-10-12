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
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <html lang={siteLanguage} />
        {seo.url && <meta property="og:url" content={seo.url} />}
        {(article ? true : null) && (
          <meta property="og:type" content="article" />
        )}
        {seo.title && (
          <meta property="og:title" content={seo.title} />
        )}
        {seo.description && (
          <meta property="og:description" content={seo.description} />
        )}
        {seo.image && (
          <meta property="og:image" content={seo.image} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        {twitterUsername && (
          <meta name="twitter:creator" content={twitterUsername} />
        )}
        {seo.title && (
          <meta name="twitter:title" content={seo.title} />
        )}
        {seo.description && (
          <meta
            name="twitter:description"
            content={seo.description}
          />
        )}
        {seo.image && (
          <meta name="twitter:image" content={seo.image} />
        )}
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
