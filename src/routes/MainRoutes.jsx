import React from 'react'
import HomePage from '../Pages/HomePage'
import {Route, Routes} from 'react-router-dom'
import UsersPage from '../Pages/UsersPages'
import MainLayout from '../layouts/MainLayout'
import LinkPage from '../Pages/LinkPage'

const MainRoutes = () => {
    return (
      <Routes>
         <Route element = {<MainLayout />}>
              <Route path ="/" element={<HomePage/>}/>
              <Route path='/users' element={<UsersPage/>}/>
              <Route path = '/link' element={<LinkPage/>}/>
          </Route>
      </Routes>
    )
  }
  
  export default MainRoutes