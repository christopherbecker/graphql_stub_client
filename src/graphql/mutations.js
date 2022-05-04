import { gql } from "@apollo/client";

export const ADD_LIKE_MUTATION = gql`
  mutation Like($id: String!) {
    like(uuid: $id) {
      likes
    }
  }
`;

export const REMOVE_LIKE_MUTATION = gql`
  mutation Dislike($id: String!) {
    dislike(uuid: $id) {
      likes
    }
  }
`;

export const REMOVE_NEWS_MUTATION = gql`
  mutation Delete($id: String!) {
    delete(uuid: $id) {
      likes
    }
  }
`;
