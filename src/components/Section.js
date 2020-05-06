import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledSection = styled.section`
  min-height: 85vh;
  overflow: scroll;
  padding-top: 15vh;
  background: var(--${props => props.type});

  @media screen and (min-width: 992px) {
    min-height: 92vh;
    padding-top: 8vh;
  }
`

const Section = ({ type, children }) => (
  <StyledSection type={type}>{children}</StyledSection>
)

Section.propTypes = {
  children: PropTypes.element.isRequired,
  type: PropTypes.oneOf(["default", "primary"]).isRequired,
}

export default Section
