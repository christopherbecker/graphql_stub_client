import { gql } from "@apollo/client";

export const NEWS_QUERY = gql`
  query NewsQuery {
    news {
      title
      date
      author
      uuid
      likes
    }
  }
`;

export const NEWS_ARTICLE_QUERY = gql`
  query SingleNews($id: String!) {
    singleNews(uuid: $id) {
      title
      date
      author
      likes
      text
      uuid
    }
  }
`;
