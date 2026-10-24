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
        source: '/home-2',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/home-2/',
        destination: '/',
        statusCode: 301,
      },
      {
        source: '/ecommerce-websites',
        destination: '/services/ecommerce-development',
        statusCode: 301,
      },
      {
        source: '/ecommerce-websites/',
        destination: '/services/ecommerce-development',
        statusCode: 301,
      },
      {
        source: '/web-design-services',
        destination: '/services/web-design',
        statusCode: 301,
      },
      {
        source: '/web-design-services/',
        destination: '/services/web-design',
        statusCode: 301,
      },
      {
        source: '/services/app-development',
        destination: '/services/custom-app-development/mobile-app-development',
        statusCode: 301,
      },
      {
        source: '/services/app-development/',
        destination: '/services/custom-app-development/mobile-app-development',
        statusCode: 301,
      },
      {
        source: '/uk/google-ads-managment',
        destination: '/uk/google-ads-management',
        statusCode: 301,
      },
      {
        source: '/uk/google-ads-managment/',
        destination: '/uk/google-ads-management',
        statusCode: 301,
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
        statusCode: 301,
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
        source: '/react-native-app-development',
        destination: '/services/custom-app-development/mobile-app-development/react-native',
        permanent: true
      },
      {
        source: '/react-native-app-development/',
        destination: '/services/custom-app-development/mobile-app-development/react-native',
        permanent: true
      },
      {
        source: '/services/app-development/react-native',
        destination: '/services/custom-app-development/mobile-app-development/react-native',
        permanent: true
      },
      {
        source: '/services/app-development/react-native/',
        destination: '/services/custom-app-development/mobile-app-development/react-native',
        permanent: true
      },
      {
        source: '/flutter-app-development',
        destination: '/services/custom-app-development/mobile-app-development/flutter',
        permanent: true
      },
      {
        source: '/flutter-app-development/',
        destination: '/services/custom-app-development/mobile-app-development/flutter',
        permanent: true
      },
      {
        source: '/services/app-development/flutter',
        destination: '/services/custom-app-development/mobile-app-development/flutter',
        permanent: true
      },
      {
        source: '/services/app-development/flutter/',
        destination: '/services/custom-app-development/mobile-app-development/flutter',
        permanent: true
      },
      {
        source: '/services/payment-gateway-integration',
        destination: '/services/ecommerce-development/payment-gateway-integration',
        permanent: true
      },
      {
        source: '/services/payment-gateway-integration/',
        destination: '/services/ecommerce-development/payment-gateway-integration',
        permanent: true
      },
      {
        source: '/payment-gateway-integration',
        destination: '/services/ecommerce-development/payment-gateway-integration',
        permanent: true
      },
      {
        source: '/payment-gateway-integration/',
        destination: '/services/ecommerce-development/payment-gateway-integration',
        permanent: true
      },
      {
        source: '/services/ai-automation',
        destination: '/services/automation/ai-automation',
        permanent: true
      },
      {
        source: '/services/ai-automation/',
        destination: '/services/automation/ai-automation',
        permanent: true
      },
      {
        source: '/ai-automation',
        destination: '/services/automation/ai-automation',
        permanent: true
      },
      {
        source: '/ai-automation/',
        destination: '/services/automation/ai-automation',
        permanent: true
      },
      {
        source: '/graphic-design',
        destination: '/services/graphic-design',
        permanent: true
      },
      {
        source: '/graphic-design/',
        destination: '/services/graphic-design',
        permanent: true
      },
      {
        source: '/content-creation',
        destination: '/services/content-creation',
        permanent: true
      },
      {
        source: '/content-creation/',
        destination: '/services/content-creation',
        permanent: true
      },
      {
        source: '/digital-growth-audit',
        destination: '/services/digital-growth-audit',
        permanent: true
      },
      {
        source: '/digital-growth-audit/',
        destination: '/services/digital-growth-audit',
        permanent: true
      },
      {
        source: '/services/web-mobile-app-development',
        destination: '/services/custom-app-development',
        permanent: true
      },
      {
        source: '/services/web-mobile-app-development/',
        destination: '/services/custom-app-development',
        permanent: true
      },
      {
        source: '/web-mobile-app-development',
        destination: '/services/custom-app-development',
        permanent: true
      },
      {
        source: '/web-mobile-app-development/',
        destination: '/services/custom-app-development',
        permanent: true
      },
      {
        source: '/services/custom-app-development/web-application-development',
        destination: '/services/custom-app-development/web-applications',
        permanent: true
      },
      {
        source: '/services/custom-app-development/web-application-development/',
        destination: '/services/custom-app-development/web-applications',
        permanent: true
      },
      {
        source: '/services/custom-app-development/mobile-application',
        destination: '/services/custom-app-development/mobile-app-development',
        permanent: true
      },
      {
        source: '/services/custom-app-development/mobile-application/',
        destination: '/services/custom-app-development/mobile-app-development',
        permanent: true
      },
      {
        source: '/web-application-development',
        destination: '/services/custom-app-development/web-applications',
        permanent: true
      },
      {
        source: '/web-application-development/',
        destination: '/services/custom-app-development/web-applications',
        permanent: true
      },
      {
        source: '/services/web-applications',
        destination: '/services/custom-app-development/web-applications',
        permanent: true
      },
      {
        source: '/services/web-applications/',
        destination: '/services/custom-app-development/web-applications',
        permanent: true
      },
      {
        source: '/services/mobile-app-development',
        destination: '/services/custom-app-development/mobile-app-development',
        permanent: true
      },
      {
        source: '/services/mobile-app-development/',
        destination: '/services/custom-app-development/mobile-app-development',
        permanent: true
      },
      {
        source: '/mobile-app-development',
        destination: '/services/custom-app-development/mobile-app-development',
        permanent: true
      },
      {
        source: '/mobile-app-development/',
        destination: '/services/custom-app-development/mobile-app-development',
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
      },
      {
        source: '/services/seo-service',
        destination: '/services/seo-services',
        permanent: true
      },
      {
        source: '/services/seo-service/',
        destination: '/services/seo-services',
        permanent: true
      },
      {
        source: '/case-studies/scorpion-arabia-enterprise-wordpress-website-case-study',
        destination: '/case-studies/scorpion-arabia-enterprise-website-case-study',
        permanent: true
      },
      {
        source: '/case-studies/scorpion-arabia-enterprise-wordpress-website-case-study/',
        destination: '/case-studies/scorpion-arabia-enterprise-website-case-study',
        permanent: true
      },
      {
        source: '/case-studies/pet-grooming-website-seo-nuxt-migration-case-study',
        destination: '/case-studies/pet-grooming-website-usa-case-study',
        permanent: true
      },
      {
        source: '/case-studies/pet-grooming-website-seo-nuxt-migration-case-study/',
        destination: '/case-studies/pet-grooming-website-usa-case-study',
        permanent: true
      },
      {
        source: '/services/case-study',
        destination: '/case-studies',
        permanent: true
      },
      {
        source: '/services/case-study/',
        destination: '/case-studies',
        permanent: true
      },
      {
        source: '/services/case-studies',
        destination: '/case-studies',
        permanent: true
      },
      {
        source: '/services/case-studies/',
        destination: '/case-studies',
        permanent: true
      },
      {
        source: '/services/ccase-study',
        destination: '/case-studies',
        permanent: true
      },
      {
        source: '/services/ccase-study/',
        destination: '/case-studies',
        permanent: true
      }
    ];
  },
  trailingSlash: false,
  eslint: {
    ignoreDuringBuilds: true,
  },


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
