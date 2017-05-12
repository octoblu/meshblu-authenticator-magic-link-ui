import PropTypes from "prop-types"
import React from "react"

import Button from "../Button"
import Page from "../Page"
import Spinner from "../Spinner"
import StyledFormError from "../StyledFormError"
import StyledFormField from "../StyledFormField"
import StyledHeading from "../StyledHeading"
import StyledInput from "../StyledInput"

const propTypes = {
  busy: PropTypes.bool,
  error: PropTypes.object,
  onLogin: PropTypes.func.isRequired,
}

const MagicLinkLoginPage = ({ busy, error, onLogin }) => {
  let buttonContent = 'Send Magic Link'
  if (busy) buttonContent = <Spinner inverted size="mini" theme="blue" />

  let flashErrorMessage = null
  if (error) flashErrorMessage = <StyledFormError>{error.message}</StyledFormError>

  const onSubmit = event => {
    event.preventDefault()
    onLogin({ email: event.target.email.value })
  }

  return (
    <Page>
      <StyledHeading>Sign on with your company email</StyledHeading>

      <form onSubmit={onSubmit}>
        <StyledFormField>
          <StyledInput type="email" name="email" placeholder="user@example.com" error={error}/>
          {flashErrorMessage}
        </StyledFormField>

        <Button block disabled={busy}>{buttonContent}</Button>
      </form>
    </Page>
  )
}

MagicLinkLoginPage.propTypes = propTypes

export default MagicLinkLoginPage
