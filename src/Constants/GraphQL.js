import gql from "graphql-tag";

export const QUERY_USERS_LIST = gql`
  query {
    allUsers {
      id
      name
      age
      knowledge {
        language
      }
      city
    }
    totalUsers
  }
`;

export const QUERY_USER = gql`
  query($userID: Int!) {
    user(id: $userID) {
      id
      name
      age
      knowledge {
        language
        frameworks
      }
      city
    }
  }
`;

export const UPDATE_USER_CITY = gql`
  mutation updateUserCity($userID: ID!, $city: String!) {
    updateUserCity(userID: $userID, city: $city) {
      city
    }
  }
`;
