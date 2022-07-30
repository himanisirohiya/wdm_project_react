import React from 'react'
import { Navbar } from './navbar'
import { Link } from 'react-router-dom'

export const ChangePassword = () => {
  return (
    <>
      <Navbar />
      <section id='chgnpassword-page'>
        <form classNameName='chgnpassword-form' action='authenticate.php' method='post'>
          <h3>Change Password</h3>
          <div classNameName='form-body'>
            <div classNameName='column'>
              <div classNameName='input-group'>
                <label>Old Password </label>
                <input type='password' name='oldpwd' placeholder='Enter your password' required />
              </div>
              <div classNameName='input-group'>
                <label>New Password </label>
                <input type='password' name='password' placeholder='Enter your password' required />
              </div>
              <div classNameName='input-group'>
                <label>Confirm Password </label>
                <input type='password' name='confpwd' placeholder='Enter your password' required />
              </div>
            </div>
          </div>
          <div classNameName='form-footer'>
            <input classNameName='btn' type='submit' value='Update' />
          </div>
        </form>
        <Link to='/dashboard'>Back to dashboard</Link>
      </section>
    </>
  )
}
