import React from 'react'
import { Navbar } from './navbar'

export const Register = () => {
  return (
    <>
      <Navbar />
      <section id='registration-page'>
        <form className='signup-form' action='authenticate.php' method='post'>
          <h3>Create Account</h3>
          <div className='form-body'>
            <div className='row'>
              <div className='input-group'>
                <label>First name </label>
                <input type='text' name='firsname' placeholder='Enter your first name' required />
              </div>
              <div className='input-group'>
                <label>Last name</label>
                <input type='text' name='lastname' placeholder='Enter your last name' required />
              </div>
              <div className='input-group'>
                <label>Ancestor</label>
                <select name='ancestorid' required>
                  <option value='1'>1</option>
                  <option selected value='2'>
                    2
                  </option>
                  <option value='3'>3</option>
                  <option value='4'>4</option>
                  <option value='5'>5</option>
                  <option value='6'>6</option>
                </select>
              </div>
              <div className='input-group'>
                <label>Relationship to Ancestor</label>
                <select name='relationship' placeholder='Enter your relationship to ancestor' required>
                  <option value='father'>father</option>
                  <option value='mother'>mother</option>
                  <option value='brother'>brother</option>
                  <option value='sister'>sister</option>
                </select>
              </div>
              <div className='input-group'>
                <label>Email </label>
                <input type='email' name='email' placeholder='Enter your email address' required />
              </div>
              <div className='input-group'>
                <label>Password </label>
                <input type='password' name='password' placeholder='Enter your your password' required />
              </div>
              <div className='input-group'>
                <label>Confirm Password</label>
                <input type='password' name='confirmpassword' placeholder='Confirm your password' required />
              </div>
            </div>
          </div>
          <div className='form-footer'>
            <input className='btn btn_primary' type='submit' value='Sign Up' />
          </div>
        </form>
      </section>
    </>
  )
}
