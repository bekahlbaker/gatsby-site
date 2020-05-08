import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import accessibility from "../images/accessibility.png"
import churchloopmobile from "../images/churchloopmobile.png"
import churchloopweb from "../images/churchloopweb.png"
import fiftyoneten from "../images/fiftyoneten.png"
import minerva from "../images/minerva.png"
import mint from "../images/mint.png"
import mybridge from "../images/mybridge.png"
import predikt from "../images/predikt.png"
import redaway from "../images/redaway.png"
import tabhopmobile from "../images/tabhopmobile.png"
import tabhopweb from "../images/tabhopweb.png"
import thesource from "../images/thesource.png"
import vouch from "../images/vouch.png"

const StyledWorkCard = styled.div`
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgb(46, 49, 49, 0.3);
  display: flex;
  flex-direction: column;
  max-width: 20vw;
`

const StyledWorkCardContent = styled.div`
  background: var(--black);
  box-sizing: border-box;
  color: var(--white);
  height: 100%;
  /* opacity: 0; */
  padding: 5% 6%;
  /* transition: 0.5s opacity; */
  border-radius: 0 0 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* &:hover,
  &:active {
    opacity: 1;
    transition: 0.5s opacity;
  } */
`

const WorkCardLink = styled.a`
  color: var(--primary);
`

const WorkCardTitle = styled.h3`
  color: var(--primary);
  font-family: var(--serif);
  font-size: 1.75em;
`

const WorkCardDescription = styled.p`
  margin-top: -15px;
  color: var(--white);
  font-family: var(--sans);
`

const StyledImage = styled.img`
  max-width: 20vw;
  border-radius: 5px 5px 0 0;
`

const WorkCard = ({ project }) => {
  const { name, url, thumbnail, description } = project
  console.log(thumbnail)
  const [hoverActive, setHoverActive] = React.useState(false)

  const setHoverState = () => {
    if (isTouch()) {
      setHoverActive(!hoverActive)
    }
  }

  const isTouch = () => {
    var el = document.createElement("div")
    el.setAttribute("ongesturestart", "return;") // or try "ontouchstart"
    return typeof el.ongesturestart === "function"
  }

  const returnImage = thumbnail => {
    switch (thumbnail) {
      case "accessibility":
        return accessibility
      case "churchloopmobile":
        return churchloopmobile
      case "churchloopweb":
        return churchloopweb
      case "fiftyoneten":
        return fiftyoneten
      case "minerva":
        return minerva
      case "mint":
        return mint
      case "mybridge":
        return mybridge
      case "predikt":
        return predikt
      case "redaway":
        return redaway
      case "tabhopmobile":
        return tabhopmobile
      case "tabhopweb":
        return tabhopweb
      case "thesource":
        return thesource
      case "vouch":
        return vouch
      default:
        return null
    }
  }

  return (
    <StyledWorkCard
      className={`WorkCard ${hoverActive ? "active" : ""}`}
      onClick={setHoverState}
      onKeyPress={setHoverState}
    >
      <StyledImage src={returnImage(thumbnail)} />
      <StyledWorkCardContent>
        <WorkCardLink href={url} target="_blank" rel="noopener noreferrer">
          <WorkCardTitle>{name}</WorkCardTitle>
        </WorkCardLink>
        <WorkCardDescription>{description}</WorkCardDescription>
      </StyledWorkCardContent>
    </StyledWorkCard>
  )
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
