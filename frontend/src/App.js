import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Protected from './components/Protected';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/protected"
            element={
              <PrivateRoute component={Protected} />
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
