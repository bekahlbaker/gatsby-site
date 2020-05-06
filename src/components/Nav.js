import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNavigation = styled.nav`
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  position: fixed;
  top: 0;
  nav {
    background: var(--black);
    border-radius: 5px 0 0 5px;
    padding: 10px;
    width: 100%;
    right: 10px;
    position: absolute;
    @media (min-width: 1024px) {
      width: 50%;
      right: 0;
    }
    ul {
      display: flex;
      justify-content: space-evenly;
      margin: 0;
      padding-left: 0px;
    }
    ul > li {
      list-style: none;
      margin: 0;
    }
    a {
      text-decoration: none;
      font-family: var(--sans);
      color: var(--white);
      font-weight: bold;
      padding: 0 10px 10px 10px;
      border-bottom: 5px solid var(--${props => props.borderColor});
      transition: border-bottom 0.5s ease;
    }
    a:hover {
      border-bottom: 5px solid var(--${props => props.hoverBorderColor});
    }
  }
`

const Nav = ({ borderColor, hoverBorderColor }) => (
  <StyledNavigation
    borderColor={borderColor}
    hoverBorderColor={hoverBorderColor}
  >
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/work">My Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </StyledNavigation>
)

export default Nav
