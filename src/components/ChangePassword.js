import React from 'react'
import { Navbar } from './navbar'
import { Link } from 'react-router-dom'
import './ChangePassword.css'
import Footer from './Footer/Footer'

export const ChangePassword = () => {
  return (
    <>
      <Navbar />
      <div className='bodyWrapper'>
        <section id='chgnpassword-page'>
          <form className='chgnpassword-form' action='authenticate.php' method='post'>
            <h3>Change Password</h3>
            <div className='form-body'>
              <div className='column'>
                <div className='input-group'>
                  <label>Old Password </label>
                  <input type='password' name='oldpwd' placeholder='Enter your password' required />
                </div>
                <div className='input-group'>
                  <label>New Password </label>
                  <input type='password' name='password' placeholder='Enter your password' required />
                </div>
                <div className='input-group'>
                  <label>Confirm Password </label>
                  <input type='password' name='confpwd' placeholder='Enter your password' required />
                </div>
              </div>
            </div>
            <div className='form-footer'>
              <input className='btn btn_primary' type='submit' value='Update' />
              <Link to='/dashboard'>Back to dashboard</Link>
            </div>
          </form>
        </section>
      </div>
      <Footer />
    </>
  )
}
