import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt } from "@fortawesome/free-solid-svg-icons"
import Container from "../Container"
import Nav from "../Nav"
import { StyledLeadText } from "../Header"

const StyledLinksGrid = styled.div`
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

const StyledIcon = styled.div`
  font-size: 4em;
  color: var(--black);

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
      <StyledIcon>
        <FontAwesomeIcon icon={faAt} />
      </StyledIcon>
    </StyledLinksGrid>
  </Container>
)

export default ContactLinks
