import React from "react";
import Head from "next/head";

import config from "../../lib/config";

function SEO({
  title = config.site.title,
  description = config.site.description,
  image = config.author.avatar,
  sharedRoute,
}) {
  const route = `${config.site.url}${sharedRoute.replace("/", "")}`;

  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:site_name" content={title} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={route} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={config.site.url + image.replace("/", "")}
      />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={route} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={config.site.url + image.replace("/", "")}
      />
    </Head>
  );
}

export default SEO;
