import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LeftMenu from '../left-menu/LeftMenu'
import About from '../left-menu/about/About'
import Market from '../left-menu/market/Market'
import Users from '../left-menu/users/Users'


export default function Routers() {
  return (
    <div style={{ display: 'flex' }}>
    <LeftMenu />
    <div style={{ marginLeft: '250px', padding: '16px', flex: 1 }}>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/market" element={<Market />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  </div>
  )
}
