import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomeScreen from '../homeScreen'
import { LoginScreen } from '../loginScreen'
import { NoMatch } from '../NoMatch'
import { ChangePassword } from '../ChangePassword'
import { Register } from '../Register'
import { ForgotPassword } from '../ForgotPassword'
import { DashBoard } from '../DashBoard'

const Routing = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route index path='/' element={<HomeScreen />}></Route>
          <Route path='/loginscreen' element={<LoginScreen />}></Route>
          <Route path='/dashboard' element={<DashBoard />} />
          <Route path='/changepassword' element={<ChangePassword />} />
          <Route path='/register' element={<Register />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='*' element={<NoMatch />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
