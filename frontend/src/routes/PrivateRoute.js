import React, { useContext, useEffect, useState } from 'react';
import { fetchProtected } from '../api/auth';
import AuthContext from '../context/AuthContext';

const Protected = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getProtectedData = async () => {
      try {
        const res = await fetchProtected(user.token);
        setData(res);
      } catch (error) {
        console.error(error);
      }
    };

    if (user) {
      getProtectedData();
    }
  }, [user]);

  return (
    <div>
      <h1>Protected Data</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};

export default Protected;
