import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import avatarM from '../img/avatarM.jpg';

function Navigation() {
  return (
    <NavigationStyled>
      <div className="avatar">
        {/* image to be 500X500 to have round frame */}
        <img src={avatarM} alt="avatar" />
      </div>
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink to="/" exact activeClassName="active-class">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" exact activeClassName="active-class">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" exact activeClassName="active-class">
            Resume
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolios" exact activeClassName="active-class">
            Portfolios
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/blogs" exact activeClassName="active-class">
            Blogs
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" exact activeClassName="active-class">
            Contact
          </NavLink>
        </li>
      </ul>
      <footer className="footer">
        <p>
          <span>&copy;</span> 2021 My Portfolio Website
        </p>
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
  border-right: 1px solid var(--border-color);

  .avatar {
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 1rem 0;

    img {
      width: 70%;
      border-radius: 50%;
      border: 8px solid var(--border-color);
    }
  }

  .nav-items {
    width: 100%;
    text-align: center;
    .active-class {
      background-color: var(--primary-color);
      color: var(--white-color);
    }
    li {
      display: block;
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        transition: all 0.4s ease-in-out;
        z-index: 10;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
        &:hover {
          cursor: pointer;
          color: var(--white-color);
        }
        &::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          z-index: -1;
          opacity: 0.21;
        }
      }
      /* highlight effect on hover */
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 2rem 0;
      font-size: 1.1rem;
      display: block;
      text-align: center;
    }
  }
`;

export default Navigation;
