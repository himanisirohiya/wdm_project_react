import React, { Component } from 'react'
import { footerItems } from './FooterItems'
import './Footer.css'

class FooterMain extends Component {
  state = { clicked: false }
  render() {
    return (
      <>
        <footer id='footer'>
          <div className='footer_content'>
            <ul className={this.state.clicked ? 'foot-menu active' : 'foot-menu'}>
              {footerItems.map((item, index) => {
                return (
                  <div className='footItems'>
                    <li key={index} id={index}>
                      <span className={item.cName}>{item.title}</span>
                      <div className='factor'>
                        {Object.keys(item.data).map((keys) => {
                          return (
                            <a className={keys} href={item.url}>
                              {item.data[keys]}
                            </a>
                          )
                        })}
                      </div>
                    </li>
                  </div>
                )
              })}
            </ul>
          </div>
          <div className='subfooter_content'>&copy; diazfontes.com | 2022 All rights reserved</div>
        </footer>
      </>
    )
  }
}

export default FooterMain
