import React, { Component } from "react"
import FontAwesome from "react-fontawesome"
import "./Contact.css"

import FormErrors from "../FormErrors/FormErrors"
import FormResponse from "../FormResponse/FormResponse"

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      form: {
        fullName: "",
        emailAddress: "",
        message: "",
      },
      formErrors: {
        fullName: "",
        emailAddress: "",
        message: "",
      },
      showLoader: false,
      fullNameValid: null,
      emailAddressValid: null,
      messageValid: null,
      formValid: null,
      formSuccess: false,
      formError: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.handleInputBlur = this.handleInputBlur.bind(this)
  }

  handleInputChange(event) {
    const { name, value } = event.target

    this.setState(
      {
        form: {
          ...this.state.form,
          [name]: value,
        },
      },
      () => {
        if (name !== "emailAddress") {
          this.validateField(name, value)
        }
      }
    )
  }

  handleInputBlur(event) {
    const { name, value } = event.target

    this.validateField(name, value)
  }

  validateField(fieldName, value) {
    const fieldValidationErrors = this.state.formErrors
    let { fullNameValid, emailAddressValid, messageValid } = this.state

    switch (fieldName) {
      case "fullName":
        fullNameValid = value.length > 0
        fieldValidationErrors.fullName = fullNameValid
          ? ""
          : "Please enter your name."
        break
      case "emailAddress":
        emailAddressValid =
          value.length > 0 &&
          value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
        fieldValidationErrors.emailAddress = emailAddressValid
          ? ""
          : "Please enter a valid email."
        break
      case "message":
        messageValid = value.length > 0
        fieldValidationErrors.message = messageValid
          ? ""
          : "Please enter a message."
        break
      default:
        break
    }

    this.setState({
      formErrors: fieldValidationErrors,
      fullNameValid,
      emailAddressValid,
      messageValid,
    })

    this.validateForm()
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.fullNameValid &&
        this.state.emailAddressValid &&
        this.state.messageValid,
    })
  }

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.formValid) {
      this.setState({
        showLoader: true,
        formValid: false,
      })

      fetch(
        "https://j7gc6ulad8.execute-api.us-east-1.amazonaws.com/production",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.state.form),
        }
      )
        .then(res => {
          if (res.ok) {
            this.setState({
              showLoader: false,
              formSuccess: true,
              form: {
                fullName: "",
                emailAddress: "",
                message: "",
              },
            })
          }
        })
        .catch(() => {
          this.setState({
            showLoader: false,
            formSuccess: false,
            formValid: true,
          })
        })
    }
  }

  render() {
    return (
      <div className="Contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p className="lead">
            I&apos;d love to hear from you. Please reach out if you have any
            questions or comments using the form below.
          </p>
          <form onSubmit={this.handleSubmit}>
            <div>
              {this.state.showLoader && (
                <div className="loader-container">
                  <FontAwesome className="loader" name="redo" spin />
                </div>
              )}
              <FormResponse
                success={this.state.formSuccess}
                error={this.state.formError}
              />
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <label htmlFor="fullName">
              Full Name
              <input
                className={this.state.fullNameValid === false ? "invalid" : ""}
                type="text"
                name="fullName"
                value={this.state.form.fullName}
                onChange={this.handleInputChange}
              />
            </label>
            <label htmlFor="emailAddress">
              Email Address
              <input
                className={
                  this.state.emailAddressValid === false ? "invalid" : ""
                }
                type="text"
                name="emailAddress"
                value={this.state.form.emailAddress}
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
              />
            </label>
            <label htmlFor="message">
              Message
              <textarea
                className={this.state.messageValid === false ? "invalid" : ""}
                name="message"
                id="message"
                rows="4"
                value={this.state.form.message}
                onChange={this.handleInputChange}
              />
            </label>

            <input
              className="submit-button"
              type="submit"
              disabled={!this.state.formValid}
            />
          </form>
        </div>
      </div>
    )
  }
}

export default Contact
