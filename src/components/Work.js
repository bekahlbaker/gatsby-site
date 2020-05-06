import React from "react"
import styled from "styled-components"
import WorkCard from "./WorkCard"
import Container from "./Container"
import Nav from "./Nav"
import { StyledLeadText } from "./Header"
import work from "../utils/work.json"

const StyledWorkCardGrid = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(1, 1fr);
  padding-bottom: 15vh;
  padding-top: 5vh;

  @media screen and (min-width: 500px) and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

const StyledH2 = styled.h2`
  font-size: 4em;
  font-weight: bold;
  line-height: 75px;
  margin: 0;
  margin: 20px 0 20px 0;
  font-family: var(--serif);
`

const renderWorkCards = () => {
  return work.map(project => <WorkCard key={project.name} project={project} />)
}

const Work = () => (
  <Container>
    <Nav borderColor="default" hoverBorderColor="primary" />
    <StyledH2>My Work</StyledH2>
    <StyledLeadText>
      Here are some projects I&apos;d like to show off. They are a mix of front
      end applications and back end APIs. I&apos;ve included links to either the
      live product, promotional pages or github repos. I hope you enjoy!
    </StyledLeadText>
    <StyledWorkCardGrid>{renderWorkCards()}</StyledWorkCardGrid>
  </Container>
)

export default Work
