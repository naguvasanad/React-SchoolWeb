import { Link, Outlet } from 'react-router-dom'
import { FaFacebook ,FaTwitterSquare,FaGithub} from "react-icons/fa";
import "./Layout.css"
import { BiSolidSchool } from "react-icons/bi";

const Layout = () => {

  return (
    <div className='parent'>

        <div className='menu_logo'>
            <h3><BiSolidSchool className='school'/><span>S</span><span>chool</span></h3>
        </div>
        {/* menu links */}
            <div className='menu_link'>
            <ul>
                <li style={{listStyleType:"none"}}>
                    <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Home</Link>
                </li>
                <li style={{listStyleType:"none"}}>
                    <Link to="/About" style={{textDecoration: 'none', color: 'black'}}>About</Link>
                </li>
                <li style={{listStyleType:"none"}}>
                <Link to="/Contact" style={{textDecoration: 'none', color: 'black'}}>Contact</Link>
                </li>

                <li style={{listStyleType:"none"}}>
  
                    <Link to="/Service" style={{textDecoration: 'none', color: 'black'}}>Students</Link>
                </li>
                
            </ul>
            </div>

<div className='menu_icon'>
  <ul>
    <li style={{listStyleType:"none"}}><Link><FaFacebook className='facebook'/></Link></li>
    <li style={{listStyleType:"none"}}><Link><FaTwitterSquare className='twitter'/></Link></li>
    <li style={{listStyleType:"none"}}><Link><FaGithub className='github'/></Link></li>
  </ul>
</div>

       
        <Outlet/>
      
    </div>
  )
}

export default Layout
