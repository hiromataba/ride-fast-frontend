/* eslint-disable jsx-a11y/anchor-is-valid */
import { useDispatch } from 'react-redux';
import './Login.css';
import React, { useEffect } from 'react';
import storage from '../../services/storageService';
import { logoutUser } from '../../services/authService';

// import Reservation from '../Reservation/Reservation';

function HomePage({ history }) {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logoutUser(history));
    history.push('/login');
  };
  useEffect(() => {
    const token = storage.getAuthToken();
    if (!token) {
      history.push('/login');
    }
  }, [history]);
  return (
    <div>
      <h1> Welcome to Ride fast</h1>
      <input className="logout" type="submit" onClick={handleLogOut} value="Logout" />
    </div>
  );
}

export default HomePage;
