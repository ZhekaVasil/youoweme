const {gql} = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const User = gql`
  type User {
    _id: ID!
    email: String!
    name: String
    surname: String
    phone: String
    isAdmin: Boolean
  }
  
  input UserInput {
    email: String
    name: String
    surname: String
    phone: String
    isAdmin: Boolean
  }
  
  input UserFilter {
    isAdmin: Boolean
    name: String
  }

  extend type Query {
    user(email: String): User
    users(userFilter: UserFilter): [User!]!
  }

  extend type Mutation {
    addUser(userInput: UserInput): User
  }
`;

module.exports = User;
