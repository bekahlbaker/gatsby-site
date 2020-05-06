import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons"
import { Link } from "gatsby"
import styled from "styled-components"
import Container from "./Container"
import "./layout.css"

const StyledH1 = styled.h1`
  font-size: 4em;
  font-weight: bold;
  line-height: 75px;
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

const StyledLeadText = styled.p`
  font-size: 2em;
  line-height: 40px;
  max-width: 75vw;
  font-family: var(--sans);
  margin-left: 4px;
`

const StyledIcon = styled.div`
  bottom: 5vh;
  font-size: 4em;
  position: absolute;
  right: 3vw;

  @media screen and (min-width: 992px) {
    bottom: 5vh;
    font-size: 7em;
    position: absolute;
    right: 3vw;
  }
`

const StyledCode = styled.code`
  margin-left: 40px;
  font-size: 1.25em;
`

const Header = () => (
  <Container>
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
      I&apos;m a front end software developer, currently living right outside
      Dallas, TX. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Aenean porttitor, orci in luctus molestie, tortor libero iaculis dui, sed
      pharetra eros sem nec ipsum.
    </StyledLeadText>
    <StyledLeadText>
      Morbi non pellentesque lorem. Praesent luctus nisi sit amet tellus mollis,
      eget varius ipsum feugiat. Curabitur ante eros, bibendum nec nunc nec,
      condimentum tempus nibh. In commodo, augue sodales gravida congue, ante
      felis semper diam, at dictum leo neque ac massa.
    </StyledLeadText>
    <Link to="/work">
      <StyledIcon>
        <FontAwesomeIcon icon={faArrowCircleRight} />
      </StyledIcon>
    </Link>
  </Container>
)

export default Header
