import React from 'react'
import { Navbar } from './navbar'
import Footer from './Footer/Footer'

export const Contactus = () => {
  return (
    <>
      <Navbar />
      <section>
        <div className='contact-container'>
          <section className='info-details'>
            <h3>Reach out to us</h3>
            <h6>Email:</h6>
            <h6>Phone:</h6>
            <h6>Address:</h6>
          </section>
          <section className='form-details'>
            <h3>Send your query</h3>
            <form className='contact-us-form' action='authenticate.php' method='post'>
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
                    <label>Email </label>
                    <input type='email' name='email' placeholder='Enter your email address' required />
                  </div>
                  <div className='input-group'>
                    <label>Contact Number </label>
                    <input type='text' name='contact' placeholder='Enter your contact number' />
                  </div>
                  <div className='input-group'>
                    <label for='comment'>Message</label>
                    <textarea
                      id='commentid'
                      name='comment'
                      id='message'
                      placeholder='Enter your message here'
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className='form-footer'>
                <input className='btn' type='submit' value='Submit' />
              </div>
            </form>
          </section>
        </div>
      </section>

      <Footer />
    </>
  )
}
