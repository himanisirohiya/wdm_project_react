import React, { useState } from 'react'
import { Navbar } from './navbar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

export const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [pass, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoggedin, setLogin] = useState(false)
  const navigate = useNavigate()

  const loginHandle = async (e) => {
    e.preventDefault()
    let config = {}
    setLogin(true)
    navigate('/dashboard')
    // try {
    //   const { data } = await axios
    //     .post('url', config)
    //     .then((response) => {
    //       navigate('loginscreen/dashboard')
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // } catch (error) {
    //   setTimeout(() => {
    //     setError('Invalid credentials...')
    //   }, 10)
    // }
  }
  return (
    <>
      <Navbar />
      <div className='loginForm'>
        <div className='formBox'>
          <form onSubmit={loginHandle} className='login'>
            <h3 className='loginTitle'>Login</h3>
            <div className='formGroup'>
              <label htmlFor='email' className='email'>
                Email
              </label>
              <input
                type='email'
                id='email'
                placeholder='enter your email address'
                tableindex={1}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='formGroup'>
              <label htmlFor='password' className='password'>
                Password
              </label>
              <input
                type='password'
                className='password'
                id='password'
                tableindex={2}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className='sideEffect'>
              <Link to='/forgotpassword' className='loginScreen_forgotpassword'>
                Forgot Password?
              </Link>
              <Link to='/register' className='loginScreen_register'>
                Sign Up
              </Link>
            </div>
            <input type='submit' className='btn btn_primary' tabIndex={3} />
          </form>
        </div>
      </div>
    </>
  )
}
