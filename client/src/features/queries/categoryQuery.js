import gql from 'graphql-tag';

const GET_CATEGORIES = gql`
    {
        categories{
            id
            name
        }
    }
`

export default GET_CATEGORIES;