import React from "react";
import { Helmet } from "react-helmet";
import useSiteMetadata from '..//hooks/useSiteMetadata'
import useSiteLogo from '../hooks/useSiteLogo'


const SEO = ({ title, description, image, children }) => {
  const {
    siteTitle,
    siteUrl,
    siteDescription,
    siteLanguage,
    author,
  } = useSiteMetadata();
  const logo = useSiteLogo()

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    url: siteUrl,
    image: `${siteUrl}${image || logo}`,
  };

  console.log(seo)
  return (
    <Helmet
      title={seo.title}
      defaultTitle={seo.title}
      titleTemplate={`%s | ${siteTitle}`}
    >
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />
      <meta property="og:image:alt" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:image:alt" content={seo.description} />
      <meta name="twitter:creator" content={author} />
      <meta name="gatsby-theme" content="gatsby-theme-acme" />
      {children}
    </Helmet>
  );
};

export default SEO;
