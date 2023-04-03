import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import { auth } from '../firebase';
import userEvent from '@testing-library/user-event';
import logo from '../images/Amazon_logo_black_text.png'

function Login() {
  // navigate used to change URL
  const navigate = useNavigate(); // navigate('/path')
  const [email, setEmail] = useState(''); // '' = default value is empty
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault(); // prevent page from refreshing

    // firebase login
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/');
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    // firebase registration
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfull new user with email and password
        // console.log(auth)
        // navigate to home page if true
        if (auth) {
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <img
          className="login_logo"
          src={logo}
          alt="amazon_logo"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>

          <button type="submit" onClick={signIn} className="signIn_button">
            Sign in
          </button>
        </form>

        <p>
          By signing in you agree to the Fake Amazon Clone conditions of Use and
          Sale. Please review our privacy policy.
        </p>

        <button onClick={register} className="login_registerButton">
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;
