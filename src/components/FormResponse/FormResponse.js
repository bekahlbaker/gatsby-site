import React from "react"
import PropTypes from "prop-types"
import "./FormResponse.css"

const FormResponse = props => {
  if (!props.error && props.success) {
    return (
      <div className="FormResponse success">
        <h3>
          Success!{" "}
          <small>
            Your message has been sent. I'll get back with you ASAP.
          </small>
        </h3>
      </div>
    )
  } else if (!props.success && props.error) {
    return (
      <div className="FormResponse error">
        <h3>
          Aw man!{" "}
          <small>Your message didn&apos;t go through. Please try again.</small>
        </h3>
      </div>
    )
  }

  return <div className="FormResponse hidden">FormResponse</div>
}

FormResponse.propTypes = {
  success: PropTypes.bool.isRequired,
  error: PropTypes.bool.isRequired,
}

export default FormResponse
