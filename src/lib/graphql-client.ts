import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://demo.bixeltek.com/headless/graphql';

export const client = new GraphQLClient(endpoint, {
  fetch: (url, options) =>
    fetch(url, {
      ...options,
      next: { revalidate: 900 }, // 15-minute cache timer (900 seconds)
    }),
});
