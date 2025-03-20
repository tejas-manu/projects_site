import React from 'react'
import { FooterContainer, FooterWrapper, Logo, Nav, NavLink, SocialMediaIcons, SocialMediaIcon, Copyright } from './Footer_style'
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>My Projects</Logo>
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
