import React, { useState } from 'react'
import { Navbar } from './navbar'
import Footer from './Footer/Footer'
import './Contactus.css'
import axios from 'axios'

export const Contactus = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [description, setDescription] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [submiited, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    var params = new URLSearchParams();
    params.append('first_name', fname);
    params.append('last_name', lname);
    params.append('contact_number', contact);
    params.append('description', description);
    params.append('email', email);
    axios.post('http://localhost:80/phase3/contactus.php', params)
      .then(response => {
          setSubmitted(true);
          console.log(response.status)
          e.preventDefault();
      })
    e.preventDefault();
  }

  return (
    <>
      <Navbar />
      <div className='bodyWrapper'>
        <div className='contact-container'>
          <section className='info-details'>
            <h3>Reach out to us</h3>
            <h6>Email:</h6>
            <h6>Phone:</h6>
            <h6>Address:</h6>
          </section>
          {!submiited &&
            <section className='form-details'>
              <h3>Send your query</h3>
                <div className='form-body'>
                  <div className='row'>
                    <div className='input-group'>
                      <label>First name </label>
                      <input type='text' name='firsname' placeholder='Enter your first name' value={fname} onChange={(e)=>setFname(e.target.value)} required />
                    </div>
                    <div className='input-group'>
                      <label>Last name</label>
                      <input type='text' name='lastname' placeholder='Enter your last name' value={lname} onChange={(e)=>setLname(e.target.value)} required />
                    </div>
                    <div className='input-group'>
                      <label>Email </label>
                      <input type='email' name='email' placeholder='Enter your email address' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                    </div>
                    <div className='input-group'>
                      <label>Contact Number </label>
                      <input type='text' name='contact' placeholder='Enter your contact number' value={contact} onChange={(e)=>setContact(e.target.value)} />
                    </div>
                    <div className='input-group'>
                      <label for='comment'>Message</label>
                      <textarea name='comment' id='message' placeholder='Enter your message here' value={description} onChange={(e)=>setDescription(e.target.value)}></textarea>
                    </div>
                  </div>
                </div>
                <div className='form-footer'>
                  <input className='btn' type='submit' value='Submit' onClick={onSubmit} />
                </div>
            </section>
          }
          {
            submiited && <span>Submitted</span>
          }
        </div>
      </div>

      <Footer />
    </>
  )
}
