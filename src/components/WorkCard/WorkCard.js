import React, { Component } from "react"
import PropTypes from "prop-types"
import "./WorkCard.css"

class WorkCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hoverActive: false,
    }

    this.setHoverActive = this.setHoverActive.bind(this)
    this.isTouch = this.isTouch.bind(this)
  }

  setHoverActive() {
    if (this.isTouch()) {
      console.log("touch")
      this.setState({
        hoverActive: !this.state.hoverActive,
      })
    }
  }

  isTouch() {
    var el = document.createElement("div")
    el.setAttribute("ongesturestart", "return;") // or try "ontouchstart"
    return typeof el.ongesturestart === "function"
  }

  render() {
    const { name, url, thumbnail, description } = this.props.project

    return (
      <div
        className={`WorkCard ${this.state.hoverActive ? "active" : ""}`}
        onClick={this.setHoverActive}
        onKeyPress={this.setHoverActive}
        role="presentation"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      >
        <div className="content">
          <a href={url} target="_blank">
            <h3>{name}</h3>
          </a>
          <p>{description}</p>
        </div>
      </div>
    )
  }
}

WorkCard.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string,
    thumbnail: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
}

export default WorkCard
