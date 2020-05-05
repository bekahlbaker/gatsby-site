import React from "react"
import "./FormErrors.css"

const FormErrors = ({ formErrors }) => {
  return (
    <div className="FormErrors">
      {Object.keys(formErrors).map((fieldName, i) => {
        if (formErrors[fieldName].length > 0) {
          return <p key={fieldName}>{formErrors[fieldName]}</p>
        }

        return ""
      })}
    </div>
  )
}

export default FormErrors
