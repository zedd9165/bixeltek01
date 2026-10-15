export const GET_ALL_POSTS = `
  query GET_ALL_POSTS($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        excerpt
        slug
        date
        author { node { name } }
        featuredImage { node { sourceUrl } }
        categories { nodes { name slug } }
      }
    }
  }
`;


export const GET_SINGLE_POST = `
 query GetSinglePost($slug: ID!) {
  post(id: $slug, idType: SLUG) {
    id
    title
    content
    date
    author {
      node {
        name
        }
      }
    featuredImage {
      node {
        sourceUrl
      }
    }
    categories {
      nodes {
        name
        slug
      }
    }
  }
}

`;



export const GET_SUGGESTED_POSTS = `
  query GetSuggestedPosts($excludeId: ID!) {
    posts(
      where: {
        orderby: { field: DATE, order: DESC },
        notIn: [$excludeId]
      },
      first: 5
    ) {
      nodes {
        slug
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;




export const GET_ALL_CATEGORIES_WITH_COUNT = `
  query GetAllCategoriesWithCount {
    categories {
      nodes {
        name
        slug
        count
      }
    }
  }
`;