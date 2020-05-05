import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  padding-left: 30px;
  padding-right: 30px;
`

export default function PageContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
