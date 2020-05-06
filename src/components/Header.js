import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "./Container"
import Nav from "./Nav"

const StyledH1 = styled.h1`
  font-size: 6em;
  font-weight: bold;
  line-height: 80px;
  margin: 0;
  margin-bottom: 32px;
  font-family: var(--serif);

  @media screen and (min-width: 500px) and (max-width: 991px) {
    font-size: 6em;
    line-height: 110px;
  }

  @media screen and (min-width: 992px) {
    font-size: 15em;
    line-height: 200px;
    margin: 0;
    margin-bottom: 64px;
    margin-left: -4px;
  }
`

export const StyledLeadText = styled.p`
  font-size: 1.25em;
  line-height: 30px;
  width: 100%;

  @media screen and (min-width: 992px) {
    font-size: 2em;
    line-height: 40px;
    font-family: var(--sans);
    margin-left: 4px;
    max-width: 75vw;
  }
`

const StyledIcon = styled.div`
  font-size: 4em;
  color: var(--black);
  text-align: right;
  margin-bottom: 20px;

  @media screen and (min-width: 992px) {
    bottom: 5vh;
    font-size: 7em;
    position: absolute;
    right: 3vw;
  }
`

const StyledCode = styled.code`
  margin-left: 0px;
  font-size: 1em;

  @media screen and (min-width: 992px) {
    margin-left: 40px;
    font-size: 1.25em;
  }
`

const Header = () => (
  <Container>
    <Nav borderColor="primary" hoverBorderColor="white" />
    <StyledH1>
      Bekah
      <br />
      Baker
    </StyledH1>
    <StyledCode>
      const &#123; javaScript, react, react-native, html, css, ...rest &#125; =
      webDeveloper;
    </StyledCode>
    <StyledLeadText>
      I&apos;m a front end developer, currently living right outside Dallas, TX.
      I like creating mobile and single page apps using (usually) React and
      React-Native.
    </StyledLeadText>
    <StyledLeadText>
      I am experienced with JavaScript, React/React Native/Redux, Expo,
      Swift/Objective C, Apollo/Graphql, Node.js, Next, Gatsby, Netlify,
      HTML/CSS, npm/yarn, git and more.
    </StyledLeadText>
    <Link to="/work">
      <StyledIcon>
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </StyledIcon>
    </Link>
  </Container>
)

export default Header
