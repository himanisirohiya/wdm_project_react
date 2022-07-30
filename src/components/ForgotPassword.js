import React from 'react'
import { Navbar } from './navbar'

export const ForgotPassword = () => {
  return (
    <>
      <Navbar />
      <section id='frgpassword-page'>
        <form className='frgpassword-form' action='authenticate.php' method='post'>
          <h3>Forgot Password</h3>
          <div className='form-body'>
            <div className='column'>
              <div className='input-group'>
                <label>Email </label>
                <input type='email' name='email' placeholder='Enter your email id' required />
              </div>
            </div>
          </div>
          <div className='form-footer'>
            <input className='btn' type='submit' value='Submit' />
          </div>
        </form>
      </section>
    </>
  )
}
