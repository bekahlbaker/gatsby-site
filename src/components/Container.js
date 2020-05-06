import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: 10px;
  margin-right: 10px;

  @media screen and (min-width: 992px) {
    padding-left: 30px;
    padding-right: 30px;
    margin-left: 20px;
    margin-right: 20px;
  }
`

export default function PageContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
