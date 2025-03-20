import React from 'react'
import { NavLogo } from './Navbar_style'
import { Nav, NavLink, NavbarContainer, NavItems, MobileIcon, MobileMenu, MobileLink } from './Navbar_style'
import { FaBars } from 'react-icons/fa';
import { useTheme } from 'styled-components';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <NavLogo>
            <img 
              src={`${process.env.PUBLIC_URL}/logo.png`} 
              alt="Logo" 
              style={{ height: '30px', marginRight: '10px' }} 
            />
            <h1 style={{ margin: 0, color: theme.primary, whiteSpace: 'nowrap' }}>From Code to Cloud</h1>
          </NavLogo>
        </Link>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink to="/">Projects</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/" onClick={() => window.open('https://your-portfolio-url.com', '_blank')}>Back to Portfolio</NavLink>
        </NavItems>
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink to="/" onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            <MobileLink to="/blogs" onClick={() => setIsOpen(!isOpen)}>Blogs</MobileLink>
            <MobileLink onClick={() => {
              setIsOpen(!isOpen);
              window.open('https://your-portfolio-url.com', '_blank');
            }}>Back to Portfolio</MobileLink>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar
