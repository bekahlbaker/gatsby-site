/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./layout.css"

const StyledApp = styled.div`
  /* Colors */
  --primary: #ff9478;
  --black: #2e3131;
  --red: #ce1c23;
  --green: #47ad40;
  --white: #eeeeee;
  /* Fonts */
  --sans: "Open Sans", sans-serif;
  --serif: "Lobster Two", serif;
  font-family: var(--sans);
  font-size: 16px;
  color: var(--black);
  margin: 0 !important;
`

const Layout = ({ children }) => {
  return <StyledApp>{children}</StyledApp>
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
