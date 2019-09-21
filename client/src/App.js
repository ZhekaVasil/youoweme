import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const GET_USER = gql` 
  query User($email: String) {
    user(email: $email) {
      email
      name
      isAdmin
    }
  }
`;

const App = () => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { email: "eugene.vasilevsky@gmail.com" }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {(data.user && data.user.email) || ''}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
