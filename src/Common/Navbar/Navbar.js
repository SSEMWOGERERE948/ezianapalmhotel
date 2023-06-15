import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  return (
    <>
      <nav className='navbar'>
        <div className='container flex_space'>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "fas fa-times" : " fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
              <Link to='/' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to='/about' onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li>
              <Link to='/gallery' onClick={closeMobileMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to='/destinations' onClick={closeMobileMenu}>
               Services
              </Link>
            </li>
            <li>
              <Link to='/testimonial' onClick={closeMobileMenu}>
                Testimonial
              </Link>
            </li>
            <li>
              <Link to='/contact' onClick={closeMobileMenu}>
                Contact Us
              </Link>
            </li>
          </ul>

          <div className='login-area flex'>
          </div>
        </div>
      </nav>

      <header>
  <div className='container flex_space'>
    <div className='logo'>
      <img src='images/EZIANA.png' alt='' />
    </div>
    <div className='contact flex_space'>
      <div className='box flex_space'>
        <div className='icons'>
          <i class='fal fa-clock'></i>
        </div>
        <div className='text'>
          <h4>Working Hours</h4>
          <Link to='/contact'>Monday - Sunday: 24/7 hours</Link>
        </div>
      </div>
      <div className='box flex_space'>
        <div className='icons'>
          <i class='fas fa-phone-volume'></i>
        </div>
        <div className='text'>
          <h4>Call Us</h4>
          <Link to='/contact'>+256 200 903 920/+256 757 251 514</Link>
        </div>
      </div>
      <div className='box flex_space'>
        <div className='icons'>
          <i class='far fa-envelope'></i>
        </div>
        <div className='text'>
          <h4>Mail Us</h4>
          <Link to='/contact'>ezianapalmhotel@gmail.com</Link>
        </div>
      </div>
    </div>
  </div>
</header>

    </>
  )
}

export default Navbar
