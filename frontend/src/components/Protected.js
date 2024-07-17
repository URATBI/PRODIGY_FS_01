import React, { useContext, useEffect, useState } from 'react';
import { fetchProtected } from '../api/auth';
import AuthContext from '../context/AuthContext';

const Protected = () => {
  const { user } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const getProtected = async () => {
      try {
        const res = await fetchProtected(user.token);
        setMessage(res.message);
      } catch (error) {
        console.error(error);
        setMessage('Error fetching protected data');
      }
    };

    getProtected();
  }, [user]);

  return <h1>{message}</h1>;
};

export default Protected;
