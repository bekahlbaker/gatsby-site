import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledWorkCard = styled.div`
  background-image: url(${props => props.thumbnail});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 275px;
  text-decoration: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgb(46, 49, 49, 0.3);
`

const StyledWorkCardContent = styled.div`
  background: rgb(46, 49, 49, 0.9);
  box-sizing: border-box;
  color: var(--white);
  height: 100%;
  opacity: 0;
  padding: 5% 6%;
  transition: 0.5s opacity;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover,
  &:active {
    opacity: 1;
    transition: 0.5s opacity;
  }
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

  return (
    <StyledWorkCard
      className={`WorkCard ${hoverActive ? "active" : ""}`}
      onClick={setHoverState}
      onKeyPress={setHoverState}
      thumbnail={thumbnail}
    >
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
