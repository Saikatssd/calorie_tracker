import React from 'react'
import { Link } from 'react-router-dom';
import { CgMenu, CgCloseR } from "react-icons/cg";
import './navbar.css';
import logo from './calorie_tracker-logo.png'

export default function Navbar() {
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <nav className={openMenu ? "navbar active" : "navbar"}>

            <div className="navbar-header">
                <img className='navbar-heading' src={logo} alt="" />
            </div>

            <ul className="nav-items">

                <li className="active"><Link to="/calorie_tracker" onClick={() => setOpenMenu(false)} >Home</Link></li>
                <li className="active"><Link to="/calorie_tracker/food" onClick={() => setOpenMenu(false)} >Food</Link></li>
                <li className="active"><Link to="/calorie_tracker/exercise" onClick={() => setOpenMenu(false)} >Exercise</Link></li>
                <li className="active"><Link to="/calorie_tracker/challenges" onClick={() => setOpenMenu(false)}>Challenges</Link></li>
                <li className="active"><Link to="/calorie_tracker/blog" onClick={() => setOpenMenu(false)}>Blog</Link></li>
                
            </ul>
            <div className="mobile-navbar">
                <CgMenu name="menu-outline" className="mobile-nav-icon flex-align-right " onClick={() => setOpenMenu(true)} />
                <CgCloseR name="close-outline" className="mobile-nav-icon close-outline" onClick={() => setOpenMenu(false)} />
            </div>
        </nav>
    )
}


