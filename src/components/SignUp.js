import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import logo from '../images/Amazon_logo_black_text.png'
import { auth } from '../firebase';
import './SignUp.css'

function SignUp() {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const register = (e) => {
		e.preventDefault();

		if (email.trim() === '' || password.trim() === '') {
			alert('Please enter a valid password and email address');
			return;
		}

    // firebase registration
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfull new user with email and password
        // console.log(auth)
        // navigate to home page if true
        if (auth) {
					alert('New account created');
          navigate('/');
        }
      })
      .catch((error) => alert(error.message));
	}


  return (
    <div className="signUp">
      {/* Logo */}
      <div className="logo">
				<Link to="/" style={{ textDecoration: 'none' }}>
					<img
						className="login_logo"
						src={logo}
						alt="amazon_logo"
					/>
				</Link>

			</div>
      <div className="signUp-container">
				<h1 className='signUp-title'>
					Sign-Up
				</h1>

				<form className='signUp-form'>
					<h5>E-mail</h5>
					<input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>

					<h5>Password</h5>
					<input type='text' value={password} onChange={(e) => setPassword(e.target.value)}></input>

					<button className='signUp-button' type='submit' onClick={register}>Create Account</button>
				</form>

			</div>
    </div>

    // Address ???
    // City
    // State
    // Country
    // Postal
  );
}

export default SignUp;
