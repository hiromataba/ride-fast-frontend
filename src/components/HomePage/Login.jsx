/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { loginUser } from '../../services/authService';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username })).then(() => {
      history.push('/');
    });
  };

  return (
    <div>
      <form className="box" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          required
          value={username}
        />
        <input type="submit" name="" value="login" />
        <Link to="/signup" className="sign-up">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
