import React from "react"
import styled from "styled-components"

import Page from "../Page"
import StyledHeading from "../StyledHeading"

const Header = styled(StyledHeading)`
  font-size: 2rem;
  margin-bottom: 1rem;
`

const MagicLinkSentPage = () => {
  return (
    <Page>
      <Header>Magic Link sent!</Header>
      <StyledHeading>Please check your email</StyledHeading>
    </Page>
  )
}

export default MagicLinkSentPage
