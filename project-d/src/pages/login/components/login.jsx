import './login.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Business 
import Logo from '../../../assets/business/MD-Logo.svg';

// Icons 
import Facebook from '../../../assets/icons/facebook.png';
import Google from '../../../assets/icons/google.png';

function Login () {
    return (
        <>
            <div className='login-wrapper'>
                <div className='left-bg'>
                    <img src={Logo} alt="Maison`D" />
                </div>
                <div className='login-container'>
                    <h1>Login</h1>
                    <form className='login-form'>
                        {/* EMAIL ADDRESS FORM */}
                        <div className='form-spacing'>
                            <label>Email Address</label>
                            <input 
                                type="email"
                                placeholder='Enter your email'
                                required
                            />
                        </div>
                        {/* PASSWORD FORM */}
                        <div className='form-spacing'>
                            <label>Password</label>
                            <input 
                                type="password"
                                placeholder='Enter password'
                                required
                            />
                        </div>
                        <button
                            type="submit"
                        >
                            Login
                        </button>
                        <Link to="/">
                            <button className='go-back-btn'>
                                Go Back
                            </button>
                        </Link>
                    </form>
                    <p className='register-prompt'>
                        Don't have an account? <Link to="">Create one!</Link>
                    </p>
                    <div className='login-divider'>
                        <div className='left-line'/>
                        <p>Or Sign-In With</p>
                        <div className='right-line'/>
                    </div>
                    {/* SIGN-IN METHODS */}
                    <div className='sign-in-methods'>
                        <button><img src={Google} alt='Google'/></button>
                        <button><img src={Facebook} alt='Google'/></button>
                    </div>
                    <div className='sign-in-policy'>
                        <p>
                            By signing up, you agree to our
                        </p>
                        <Link>Terms & Conditions</Link>
                        <Link>Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;