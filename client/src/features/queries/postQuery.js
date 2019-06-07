import gql from "graphql-tag";

const GET_POST = gql`
  {
    posts {
      id
      title
      date
      image
      categories
    }
  }
`;

export default GET_POST;
