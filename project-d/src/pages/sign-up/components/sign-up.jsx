import './sign-up.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Business 
import Logo from '../../../assets/business/MD-Logo.svg';

// Icons 
import Facebook from '../../../assets/icons/facebook.png';
import Google from '../../../assets/icons/google.png';

function SignUp () {
    return (
        <>
            <div className='sign-up-wrapper'>
                <div className='left-bg'>
                    <img src={Logo} alt="Maison`D" />
                </div>
                <div className='sign-up-container'>
                    <h1>Sign-Up</h1>
                    <form className='sign-up-form'>

                        {/* FULL NAME FORM */}
                        <div className='full-name-form'>
                            {/* FIRST NAME */}
                            <div className='input-box'>
                                <label>First Name</label>
                                <input 
                                    type="text"
                                    placeholder='Enter First Name'
                                    required
                                />
                            </div>
                            {/* LAST NAME */}
                            <div className='input-box'>
                                <label>Last Name</label>
                                <input 
                                    type="text"
                                    placeholder='Enter Last Name'
                                    required
                                />
                            </div>
                        </div>

                        {/* EMAIL & BDAY FORM */}
                        <div className='email-bday-form'>
                            {/* EMAIL */}
                            <div className='input-box'>
                                <label>Email Address</label>
                                <input 
                                    type="email"
                                    placeholder='Enter Email Address'
                                    required
                                />
                            </div>
                            {/* BIRTHDAY */}
                            <div className='input-box'>
                                <label>Birthday</label>
                                <input 
                                    type="date"
                                    required
                                />
                            </div>
                        </div>

                        {/* MOBILE NUMBER */}
                        <div>
                            <label>Mobile Number</label>
                            <input 
                                type="tel"
                                placeholder="(+63)"
                                required
                            />
                        </div>

                        {/* PASSWORD */}
                        <div>
                            <label>Password</label>
                            <input 
                                type="password"
                                placeholder="Create a password"
                                required
                            />
                        </div>

                        {/* RE-ENTER PASSWORD*/}
                        <div>
                            <label>Confirm Password</label>
                            <input 
                                type="password"
                                placeholder="Re-enter password"
                                required
                            />
                        </div>

                        {/* TERMS & CONDITIONS */}
                        <label className='custom-checkbox'>
                            <input 
                                type='checkbox'
                                id="terms-conditions"
                                required
                            /><span className='checkmark'></span>
                            I agree to the <Link href="">Terms & Conditions</Link>
                        </label>

                        {/* PRIVACY POLICY */}
                        <label className='custom-checkbox'>
                            <input 
                                type='checkbox'
                                id="privacy-policy"
                                required
                            /><span className='checkmark'></span>
                            I agree to the <Link href="">Privacy & Policy</Link>
                        </label>

                        {/* NEWSLETTER */}
                        <label className='custom-checkbox'>
                            <input 
                                type='checkbox'
                                id="newsletter"
                            /><span className='checkmark'></span>
                            Subscribe to our newsletter (Optional)
                        </label>

                        <button type="submit">
                            Create Account
                        </button>
                        <Link to="/Login">
                            <button className='go-back-btn'>
                                Cancel
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;