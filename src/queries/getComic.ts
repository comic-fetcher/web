import gql from "graphql-tag";

export const GET_COMIC = gql`
  query getComic($comic: ID!) {
    comic(id: $comic) {
      id
      title
      link
      platform
      releases {
        id
        date
      }
    }
  }
`;
