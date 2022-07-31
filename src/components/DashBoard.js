import React from 'react'
import { Navbar } from './navbar'
import { Link, useNavigate } from 'react-router-dom'
import './DashBoard.css'
import Footer from './Footer/Footer'
import dsf from '../assets/images/dsf.png'

export const DashBoard = () => {
  let navigate = useNavigate()
  const changePassHandler = (e) => {
    e.preventDefault()
    navigate('/ChangePassword')
  }
  return (
    <>
      <Navbar />
      {/* {isAdmin? <AdminData /> : <UserData />} */}
      <div className='bodyWrapper'>
        <main>
          <div className='user-details'>
            <figure className='user-img'>
              <img className='rounded-img' src={dsf} alt='profile image' />
            </figure>
            <div className='prof-details'>
              <div className='inf'>
                <div className='det-group'>
                  <label>Username: </label>
                  <div className='details'>jon@doe.com</div>
                </div>
                <div className='det-group'>
                  <label>First Name: </label>
                  <div className='details'>Harsh</div>
                </div>
                <div className='det-group'>
                  <label>Last Name: </label>
                  <div className='details'>Artwani</div>
                </div>
                <div className='det-group'>
                  <label>Gender: </label>
                  <div className='details'>Male</div>
                </div>
                <div className='det-group'>
                  <label>Role: </label>
                  <div className='details'>Admin</div>
                </div>
              </div>
              <div className='change-info'>
                <div className='btn-chg'>
                  <input
                    type='button'
                    className='chgpwd-btn'
                    onClick={changePassHandler}
                    value='Change Password'
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className='centered-data'>
            <div className='user-info'>
              <h6>Land Information</h6>
              <div className='table'>
                <div className='tr th'>
                  <div className='td'>Name</div>
                  <div className='td'>Items Bought</div>
                  <div className='td'>Clicked</div>
                  <div className='td'>Duration</div>
                  <div className='td'>Lifetime Total</div>
                  <div className='td'>Total</div>
                </div>
                <div className='tr table-total'>
                  <div className='td'>
                    <b>Total</b>
                  </div>
                  <div className='td'>
                    <b>4102</b>
                  </div>
                  <div className='td'>
                    <b>2914</b>
                  </div>
                  <div className='td'>
                    <b>1341</b>
                  </div>
                  <div className='td'>
                    <b>$12,118,329.15</b>
                  </div>
                  <div className='td'>
                    <b>$4,036,930.16</b>
                  </div>
                </div>
                <div className='tr'>
                  <div className='td'>
                    <span>
                      <span>Andrew Jackman</span>
                    </span>
                  </div>
                  <div className='td'>
                    <span>41</span>
                  </div>
                  <div className='td'>
                    <span>30</span>
                  </div>
                  <div className='td'>
                    <span>27</span>
                  </div>
                  <div className='td'>
                    <span>$176.15</span>
                  </div>
                  <div className='td'>
                    <span>$14.94</span>
                  </div>
                </div>
                <div className='tr'>
                  <div className='td'>
                    <span>
                      <span>Oliver Ogden</span>
                    </span>
                  </div>
                  <div className='td'>
                    <span>9</span>
                  </div>
                  <div className='td'>
                    <span>3</span>
                  </div>
                  <div className='td'>
                    <span>1</span>
                  </div>
                  <div className='td'>
                    <span>$29,403.09</span>
                  </div>
                  <div className='td'>
                    <span>$1,385.58</span>
                  </div>
                </div>
                <div className='tr'>
                  <div className='td'>
                    <span>
                      <span>Basil Ullon</span>
                    </span>
                  </div>
                  <div className='td'>
                    <span>750</span>
                  </div>
                  <div className='td'>
                    <span>535</span>
                  </div>
                  <div className='td'>
                    <span>707</span>
                  </div>
                  <div className='td'>
                    <span>$795,170.40</span>
                  </div>
                  <div className='td'>
                    <span>$341,946.34</span>
                  </div>
                </div>
              </div>
              <div className='btn-row'>
                <div className='table-btn'>
                  <a className='addt-btn' href='addland.html'>
                    Add Land
                  </a>
                </div>
                <div className='table-btn'>
                  <a className='editt-btn' href='editland.html'>
                    Edit Land
                  </a>
                </div>
                <div className='table-btn'>
                  <a className='delt-btn' href='delland.html'>
                    Delete Land
                  </a>
                </div>
              </div>
            </div>
            <div className='user-info'>
              <h6>Project Information</h6>
              <div className='table'>
                <div className='tr th'>
                  <div className='td'>Name</div>
                  <div className='td'>Items Bought</div>
                  <div className='td'>Clicked</div>
                  <div className='td'>Duration</div>
                  <div className='td'>Lifetime Total</div>
                  <div className='td'>Total</div>
                </div>
                <div className='tr table-total'>
                  <div className='td'>
                    <b>Total</b>
                  </div>
                  <div className='td'>
                    <b>4102</b>
                  </div>
                  <div className='td'>
                    <b>2914</b>
                  </div>
                  <div className='td'>
                    <b>1341</b>
                  </div>
                  <div className='td'>
                    <b>$12,118,329.15</b>
                  </div>
                  <div className='td'>
                    <b>$4,036,930.16</b>
                  </div>
                </div>
                <div className='tr'>
                  <div className='td'>
                    <span>
                      <span>Andrew Jackman</span>
                    </span>
                  </div>
                  <div className='td'>
                    <span>41</span>
                  </div>
                  <div className='td'>
                    <span>30</span>
                  </div>
                  <div className='td'>
                    <span>27</span>
                  </div>
                  <div className='td'>
                    <span>$176.15</span>
                  </div>
                  <div className='td'>
                    <span>$14.94</span>
                  </div>
                </div>
                <div className='tr'>
                  <div className='td'>
                    <span>
                      <span>Oliver Ogden</span>
                    </span>
                  </div>
                  <div className='td'>
                    <span>9</span>
                  </div>
                  <div className='td'>
                    <span>3</span>
                  </div>
                  <div className='td'>
                    <span>1</span>
                  </div>
                  <div className='td'>
                    <span>$29,403.09</span>
                  </div>
                  <div className='td'>
                    <span>$1,385.58</span>
                  </div>
                </div>
                <div className='tr'>
                  <div className='td'>
                    <span>
                      <span>Basil Ullon</span>
                    </span>
                  </div>
                  <div className='td'>
                    <span>750</span>
                  </div>
                  <div className='td'>
                    <span>535</span>
                  </div>
                  <div className='td'>
                    <span>707</span>
                  </div>
                  <div className='td'>
                    <span>$795,170.40</span>
                  </div>
                  <div className='td'>
                    <span>$341,946.34</span>
                  </div>
                </div>
              </div>
              <div className='btn-row'>
                <div className='table-btn'>
                  <a className='addt-btn' href='addproject.html'>
                    Add Project
                  </a>
                </div>
                <div className='table-btn'>
                  <a className='editt-btn' href='editproject.html'>
                    Edit Project
                  </a>
                </div>
                <div className='table-btn'>
                  <a className='delt-btn' href='delproject.html'>
                    Delete Project
                  </a>
                </div>
              </div>
            </div>
            <div className='user-info'>
              <h6>Trail Information</h6>
              <div className='table'>
                <div className='tr th'>
                  <div className='td'>Name</div>
                  <div className='td'>Items Bought</div>
                  <div className='td'>Clicked</div>
                  <div className='td'>Duration</div>
                  <div className='td'>Lifetime Total</div>
                  <div className='td'>Total</div>
                </div>
                <div className='tr table-total'>
                  <div className='td'>
                    <b>Total</b>
                  </div>
                  <div className='td'>
                    <b>4102</b>
                  </div>
                  <div className='td'>
                    <b>2914</b>
                  </div>
                  <div className='td'>
                    <b>1341</b>
                  </div>
                  <div className='td'>
                    <b>$12,118,329.15</b>
                  </div>
                  <div className='td'>
                    <b>$4,036,930.16</b>
                  </div>
                </div>
                <div className='tr'>
                  <div className='td'>
                    <span>
                      <span>Andrew Jackman</span>
                    </span>
                  </div>
                  <div className='td'>
                    <span>41</span>
                  </div>
                  <div className='td'>
                    <span>30</span>
                  </div>
                  <div className='td'>
                    <span>27</span>
                  </div>
                  <div className='td'>
                    <span>$176.15</span>
                  </div>
                  <div className='td'>
                    <span>$14.94</span>
                  </div>
                </div>
                <div className='tr'>
                  <div className='td'>
                    <span>
                      <span>Oliver Ogden</span>
                    </span>
                  </div>
                  <div className='td'>
                    <span>9</span>
                  </div>
                  <div className='td'>
                    <span>3</span>
                  </div>
                  <div className='td'>
                    <span>1</span>
                  </div>
                  <div className='td'>
                    <span>$29,403.09</span>
                  </div>
                  <div className='td'>
                    <span>$1,385.58</span>
                  </div>
                </div>
                <div className='tr'>
                  <div className='td'>
                    <span>
                      <span>Basil Ullon</span>
                    </span>
                  </div>
                  <div className='td'>
                    <span>750</span>
                  </div>
                  <div className='td'>
                    <span>535</span>
                  </div>
                  <div className='td'>
                    <span>707</span>
                  </div>
                  <div className='td'>
                    <span>$795,170.40</span>
                  </div>
                  <div className='td'>
                    <span>$341,946.34</span>
                  </div>
                </div>
              </div>
              <div className='btn-row'>
                <div className='table-btn'>
                  <a role='button' className='addt-btn' href='addtrail.html'>
                    Add Trail
                  </a>
                </div>
                <div className='table-btn'>
                  <a role='button' className='editt-btn' href='edittrail.html'>
                    Edit Trail
                  </a>
                </div>
                <div className='table-btn'>
                  <a role='button' className='delt-btn' href='deltrail.html'>
                    Delete Trail
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </>
  )
}
