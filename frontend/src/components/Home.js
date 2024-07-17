
import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h2>Home Page</h2>
      {user?<p>Welcome to the home page!</p>:<p>pleace login</p>}
    </div>
  );
};

export default Home;
