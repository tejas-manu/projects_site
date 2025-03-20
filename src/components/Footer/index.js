import React from 'react'
import { FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcons, SocialMediaIcon, Copyright } from './Footer_style'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={`${process.env.PUBLIC_URL}/logo.png`} 
            alt="Logo" 
            style={{ height: '25px', marginRight: '10px' }} 
          />
          <Logo style={{ whiteSpace: 'nowrap' }}>From Code to Cloud</Logo>
        </div>
        <Nav>
          <NavLink to="/">Projects</NavLink>
          <NavLink to="/blogs">Blogs</NavLink>
          <NavLink to="/" onClick={() => window.open('https://your-portfolio-url.com', '_blank')}>Back to Portfolio</NavLink>
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href="https://linkedin.com/in/yourusername" target="_blank">
            <FaLinkedin />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://github.com/yourusername" target="_blank">
            <FaGithub />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://twitter.com/yourusername" target="_blank">
            <FaTwitter />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </Copyright>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
