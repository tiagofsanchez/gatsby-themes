import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import useSiteMetadata from "../../hooks/useSiteMetadata";
import useSiteLogo from "../../hooks/useSiteLogo";

const SEO = ({ title, description, image, article }) => {
  const {
    siteTitle,
    siteUrl,
    siteDescription,
    siteLanguage,
    author,
  } = useSiteMetadata();
  const logo = useSiteLogo();

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    url: siteUrl,
    image: `${siteUrl}${image || logo}`,
  };

  console.log(seo);
  return (
    <Helmet
      htmlAttributes={{ siteLanguage }}
      title={seo.title}
      defaultTitle={seo.title}
      titleTemplate={` ${siteTitle} - %s`}
    >
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:url" content={seo.url} />
      {article === true ? (
        <meta property="og:type" content="article" />
      ) : (
        <meta property="og:type" content="website" />
      )}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />

      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />
      <meta name="gatsby-theme" content="gatsby-theme-acme" />
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

export default SEO;
