import React from 'react'
import './navbar.css'

export const Navbar = () => {
  let navobjLeft = [
    {
      title: 'Home',
      url: '/',
      clsName: 'nav-links',
    },
    {
      title: 'About Us',
      url: '/aboutus',
      clsName: 'nav-links',
    },
    {
      title: 'Blog',
      url: '/blog',
      clsName: 'nav-links',
    },
  ]

  let navobjRight = [
    {
      title: 'Sign Up',
      url: '/register',
      clsName: 'nav-links',
    },
    {
      title: 'Log In',
      url: '/loginscreen',
      clsName: 'nav-links',
    },
  ]
  return (
    <nav className='navbarItems'>
      <ul className='navLinksLeft'>
        {navobjLeft?.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.clsName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
      <div className='DIAZSIFONTES'>DIAZSIFONTES</div>
      <ul className='navLinksRight'>
        {navobjRight?.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.clsName} href={item.url}>
                {item.title}
              </a>
            </li>
          )
        })}
      </ul>
      {/* <ul className='navLinks'>
        {navobjLeft?.map((item, index) => {
          if (item.title === 'DIAZSIFONTES') {
            // eslint-disable-next-line no-unused-vars
            return (
              <li key={index}>
                <div className='DIAZSIFONTES'>DIAZSIFONTES</div>
              </li>
            )
          } else {
            return (
              <li key={index}>
                <a className={item.clsName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          }
        })}
      </ul> */}
    </nav>
  )
}
