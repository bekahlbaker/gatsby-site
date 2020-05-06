import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  margin-left: 20px;
  margin-right: 20px;
`

export default function PageContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>
}
