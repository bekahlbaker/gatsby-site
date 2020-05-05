import React from "react"
import FontAwesome from "react-fontawesome"
import "./Header.css"

const Header = () => (
  <header className="Header section">
    <div className="container">
      <h1>
        Bekah
        <br />
        Baker
      </h1>
      <code className="large-device">
        const &#123; javaScript, react, node, html, css, ...rest &#125; =
        webDeveloper;
      </code>
      <p className="lead">
        I&apos;m a full-stack engineer, currently living in Dallas, TX. I am
        passionate about what I do, and I love creating single-page
        applications, RESTful web services and user interfaces.
      </p>
      <p className="lead">
        I am experienced with: JavaScript (including ES6/ES7), React/Redux
        (including other tools in the ecosystem), Angular, Node.js, Express,
        HTML/CSS, PostgreSQL/MySQL/MongoDB, npm/yarn, Webpack, git and more.
      </p>
      <a href="#work">
        <FontAwesome className="arrow" name="arrow-down" />
      </a>
    </div>
  </header>
)

export default Header
