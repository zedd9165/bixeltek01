/** @type {import('next').NextConfig} */


const nextConfig = {

   async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.bixeltek.com" }],
        destination: "https://bixeltek.com/:path*",
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true
      },
      {
        source: '/contact/',
        destination: '/contact-us',
        permanent: true
      },
      {
        source: '/dental-marketing',
        destination: '/industries/dental-marketing-agency',
        permanent: true
      },
       {
        source: '/industries/dental-marketing',
        destination: '/industries/dental-marketing-agency',
        permanent: true
      },
      {
        source:'/dental-marketing-001bxt',
        destination:'/industries/dental-marketing-agency',
        permanent:true
      },
      {
        source: '/dental-marketing-002bxt',
        destination: '/industries/dental-marketing-agency',
        permanent: true
      },
      {
        source: '/shopify-development',
        destination: '/services/ecommerce-development/shopify',
        permanent: true
      },
      {
        source: '/shopify-development/',
        destination: '/services/ecommerce-development/shopify',
        permanent: true
      },
      {
        source: '/ecommerce-websites/shopify',
        destination: '/services/ecommerce-development/shopify',
        permanent: true
      },
      {
        source: '/ecommerce-websites/shopify/',
        destination: '/services/ecommerce-development/shopify',
        permanent: true
      },
      {
        source: '/ecommerce-websites/woocommerce',
        destination: '/services/ecommerce-development/woocommerce',
        permanent: true
      },
      {
        source: '/ecommerce-websites/woocommerce/',
        destination: '/services/ecommerce-development/woocommerce',
        permanent: true
      }
    ];
  },
  trailingSlash: false,


  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg")
    );

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  images: {
    domains: ["demo.bixeltek.com", "images.unsplash.com"],
  },
};


export default nextConfig;
