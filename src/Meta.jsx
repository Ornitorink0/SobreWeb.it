import React from "react";
import { Helmet } from "react-helmet-async";

function MetaTags({
  title = "",
  description = "",
  name = "",
  keywords = "",
  image = "",
  locale = "it_IT",
  robots = "index,follow",
  organization = "Nome Organizzazione",
  logo = "",
  siteUrl = window.location.href,
}) {
  const structuredDataOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organization,
    url: siteUrl,
    logo: logo,
    sameAs: [
      "https://www.facebook.com/your-profile", // Aggiungi link social dell'organizzazione
      "https://www.instagram.com/your-profile",
      "https://twitter.com/your-profile",
    ],
  };

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <link rel="canonical" href={window.location.href} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <meta httpEquiv="content-language" content={locale} />

      {/* Open Graph tags (OG) for social media */}
      <meta property="og:url" content={window.location.href} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale} />

      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO optimizations */}
      <meta name="author" content={name} />

      {/* Preload important resources for better performance */}
      <link rel="preload" href={image} as="image" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

      {/* JSON-LD structured data for SEO */}
      <script type="application/ld+json">
        {JSON.stringify(structuredDataOrganization)}
      </script>
    </Helmet>
  );
}

export default MetaTags;
