import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/Sidebar'
import './Layout.scss'
import LandingPage from '../LandingPage/LandingPage'

const Layout = () => {
  return (
    <div className="App">
      <div className="page">
        <LandingPage />
      </div>
    </div>
  )
}

export default Layout
