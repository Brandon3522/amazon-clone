import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState(''); // '' = default value is empty
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault() // prevent page from refreshing

        // firebase login

    }

    const register = e => {
        e.preventDefault()

        // firebase registration

    }

    return (
    <div className='login'>
        <Link to='/' style={{textDecoration: 'none'}}>
            <img 
                className='login_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png'
                alt='amazon_logo'
                />
        </Link>
        
        <div className='login_container'>
            <h1>
                Sign-in
            </h1>

            <form>
                <h5>
                    E-mail
                </h5>
                <input type='text' value={email} onChange={e => setEmail(e.target.value)}>
                </input>

                <h5>
                    Password
                </h5>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)}>
                </input>

                <button type='submit' onClick={signIn} className='signIn_button'>Sign in</button>
            </form>

            <p>
                By signing in you agree to the Fake Amazon Clone conditions of Use and Sale. Please
                review our privacy policy.
            </p>

            <button onClick={register} className='login_registerButton'>Create Account</button>

        </div>
    </div>
  )
}

export default Login