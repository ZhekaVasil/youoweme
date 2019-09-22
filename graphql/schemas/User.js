const {gql} = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const User = gql`

  type User {
    email: String
    name: String
    surname: String
    phone: String
    isAdmin: Boolean
  }


  type Query {
    user(email: String): User
  }
`;

module.exports = User;
