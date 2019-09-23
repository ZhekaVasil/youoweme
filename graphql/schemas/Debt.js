const {gql} = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const Debt = gql`
  type Debt {
    _id: ID!
    owner: User!
    oweTo: User!
    amount: Float!
  }
  
  input DebtInput {
    owner: String!
    oweTo: String!
    amount: Float!
  }
 
  extend type Query {
    debts: [Debt!]!
  }

  extend type Mutation {
    addDebt(debtInput: DebtInput): Debt
  }
`;

module.exports = Debt;
