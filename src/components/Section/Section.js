import React from "react"
import PropTypes from "prop-types"
import "./Section.css"

const Section = props => (
  <section className={`Section ${props.background}`}>{props.children}</section>
)

Section.propTypes = {
  children: PropTypes.element.isRequired,
  background: PropTypes.oneOf(["default", "primary", "secondary"]).isRequired,
  id: PropTypes.string,
}

export default Section
