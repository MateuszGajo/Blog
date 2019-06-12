import gql from "graphql-tag";

const ADD_USER = gql`
  mutation AddUser(
    $firstName: String
    $lastName: String
    $email: String
    $password: String
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      password: $password
      email: $email
    ) {
      firstName
    }
  }
`;

export default ADD_USER;
