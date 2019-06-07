import gql from "graphql-tag";

const GET_POSTDETAIL = gql`
  query GetBookDetail($id: ID) {
    post(id: $id) {
      title
      image
      products
      recipe
    }
  }
`;

export default GET_POSTDETAIL;
