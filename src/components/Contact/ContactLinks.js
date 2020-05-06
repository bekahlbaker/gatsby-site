import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import Container from "../Container"
import Nav from "../Nav"
import { StyledLeadText } from "../Header"
import github from "../../images/github.png"
import linkedin from "../../images/linkedin.png"

const StyledLinksGrid = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(1, 1fr);
  padding-bottom: 15vh;
  padding-top: 5vh;

  @media screen and (min-width: 500px) and (max-width: 991px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
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

const StyledIcon = styled.div`
  font-size: 120px;
  color: var(--black);
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 120px;
  margin-bottom: 30px;

  @media screen and (min-width: 992px) {
    font-size: 7em;
  }
`

const ContactLinks = () => (
  <Container>
    <Nav borderColor="default" hoverBorderColor="primary" />
    <StyledH2>Contact Me</StyledH2>
    <StyledLeadText>I'd love to hear from you!</StyledLeadText>
    <StyledLinksGrid>
      <a
        href={"mailto:bekahlbaker@gmail.com"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon>
          <FontAwesomeIcon icon={faAt} />
        </StyledIcon>
      </a>
      <a
        href={"https://github.com/bekahlbaker"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon>
          <img src={github} height={120} />
        </StyledIcon>
      </a>
      <a
        href={"https://www.linkedin.com/in/rebekah-baker/"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <StyledIcon>
          <img src={linkedin} height={120} />
        </StyledIcon>
      </a>
    </StyledLinksGrid>
  </Container>
)

export default ContactLinks
