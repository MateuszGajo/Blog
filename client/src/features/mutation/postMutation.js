import gql from "graphql-tag";

const ADD_POST = gql`
  mutation AddPost(
    $title: String
    $image: String
    $date: String
    $recipe: [String]
    $categories: [String]
    $products: [String]
  ) {
    addPost(
      title: $title
      date: $date
      image: $image
      recipe: $recipe
      categories: $categories
      products: $products
    ) {
      title
    }
  }
`;

export default ADD_POST;
