import gql from "graphql-tag";

export const GET_COMICS = gql`
  query getComics($page: Float!) {
    comics(page: $page, limit: 25) {
      meta {
        itemCount
        totalPages
        totalItems
        itemsPerPage
      }
      items {
        id
        title
        link
        releases {
          id
          date
        }
      }
    }
  }
`;
