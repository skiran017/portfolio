import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avatar from '../img/avatar.jpg';

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        {/* image to be 500X500 to have round frame */}
        <img src={avatar} alt="avatar" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/home" activeClassName="active-class">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" activeClassName="active-class">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="active-class">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" activeClassName="active-class">
            Portfolios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" activeClassName="active-class">
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="active-class">
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>@ 2021 My Portfolio Website</p>
      </footer>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    img {
      width: 80%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }
`;

export default Navigation;
