// import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom';
import { CgMenu, CgCloseR } from "react-icons/cg";
import './navbar.css';
import logo from './calorie_tracker-logo.png'

export default function Navbar(props) {
    const [openMenu, setOpenMenu] = React.useState(false);

    return (
        <nav className={openMenu ? "navbar active" : "navbar"}>

            <div className="navbar-header">
                <img className='navbar-heading' src={logo} alt="" />
            </div>

            <ul className="nav-items">

                <li className="active"><Link to="/fitness_tracker" onClick={() => setOpenMenu(false)} >Home</Link></li>
                <li className="active"><Link to="/fitness_tracker/food" onClick={() => setOpenMenu(false)} >Food</Link></li>
                <li className="active"><Link to="/fitness_tracker/exercise" onClick={() => setOpenMenu(false)} >Exercise</Link></li>
                {/* <li className="active"><Link to="Apps.html">Apps</Link></li> */}
                <li className="active"><Link to="/fitness_tracker/challenges" onClick={() => setOpenMenu(false)}>Challenges</Link></li>
                <li className="active"><Link to="/fitness_tracker/blog" onClick={() => setOpenMenu(false)}>Blog</Link></li>
                {/* <li className="active"><Link to="ContactUs.html">About us</Link></li> */}
                {/* <li className="active"><Link to="/bmi">Bmi</Link></li>  */}

                {/* <li className="active flex-align-right"><Link to="Index.html">Log Out</Link></li> */}

            </ul>
            <div className="mobile-navbar">
                <CgMenu name="menu-outline" className="mobile-nav-icon flex-align-right " onClick={() => setOpenMenu(true)} />
                <CgCloseR name="close-outline" className="mobile-nav-icon close-outline" onClick={() => setOpenMenu(false)} />
            </div>
        </nav>
    )
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string.isRequired
// }

// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'About'
//   };
