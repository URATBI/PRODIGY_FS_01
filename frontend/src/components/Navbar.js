import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../context/AuthContext';
import { fetchProtected } from '../api/auth';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    const getProtected = async () => {
      try {
        if (user && user.token) {
          const res = await fetchProtected(user.token);
          setData(res);
        }
      } catch (error) {
        console.error(error);
      }
    };

    getProtected();
  }, [user]);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
      <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'No protected data'}
      </div>
    </div>
  );
};

export default Navbar;
