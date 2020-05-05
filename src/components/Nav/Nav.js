import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledNavigation = styled.header`
  padding-top: 15px;
  padding-bottom: 15px;
  width: 100%;
  position: fixed;
  top: 0;
  nav {
    background: #333;
    padding: 4px;
    width: 100%;
    right: 0;
    position: absolute;
    @media (min-width: 1024px) {
      width: 40%;
    }
    ul {
      display: flex;
      justify-content: space-evenly;
      margin: 0;
    }
    ul > li {
      list-style: none;
      margin: 0;
    }
    a {
      text-decoration: none;
      font-family: sans-serif;
      color: white;
      font-weight: bold;
    }
  }
`

const Nav = ({ siteTitle }) => (
  <StyledNavigation>
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
