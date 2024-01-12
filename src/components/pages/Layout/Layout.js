
import Footer from '../../Footer/Footer.js'
import NavBar from '../../NavBar/NavBar.js'
import { Outlet } from 'react-router-dom'
import './Layout.css'
import '../Home/Home.css'


function Layout() {
  return (
    <div>
      <NavBar />
      
      <Outlet />
      
      <Footer />
    </div>
  )
}

export default Layout