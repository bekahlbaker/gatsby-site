import React from "react"
import "./Work.css"

import WorkCard from "../WorkCard/WorkCard"

import work from "../../utils/work.json"

const renderWorkCards = () => {
  return work.map(project => <WorkCard key={project.name} project={project} />)
}

const Work = () => (
  <div className="Work">
    <div className="container">
      <h2>My Work</h2>
      <p className="lead">
        Here are some projects I&apos;d like to show off. They are a mix of
        front end applications and back end APIs. I&apos;ve included links to
        either the live product, promotional pages or github repos. I hope you
        enjoy!
      </p>
      <div className="WorkCard-container">{renderWorkCards()}</div>
    </div>
  </div>
)

export default Work
