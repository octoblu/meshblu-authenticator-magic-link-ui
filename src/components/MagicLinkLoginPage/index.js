import React from "react"
import PropTypes from "prop-types"

import { FormField, FormInput } from "zooid-ui"
import Heading from "zooid-heading"
import ErrorState from "zooid-error-state"

import Button from "../Button"
import Page from "../Page"
import styles from "./styles.css"

const propTypes = {
  onLogin: PropTypes.func.isRequired,
  busy: PropTypes.bool,
  error: PropTypes.object,
}

const MagicLinkLoginPage = ({ onLogin, busy, error }) => {
  if (busy) return <Page width="small" loading={busy} />
  let flashErrorMessage = null
  if (error) flashErrorMessage = <ErrorState title={error.message} />
  const onSubmit = event => {
    event.preventDefault()
    onLogin({ email: event.target.email.value })
  }
  return (
    <Page className={styles.root}>
      <div>
        {flashErrorMessage}
        <Heading level={5} className={styles.header}>
          Sign on with your company email
        </Heading>
        <form onSubmit={onSubmit}>
          <FormField label="Email" name="email">
            <FormInput type="email" name="email" />
          </FormField>
          <div className={styles.buttons}>
            <Button block>Send Magic Link</Button>
          </div>
        </form>
      </div>
    </Page>
  )
}

MagicLinkLoginPage.propTypes = propTypes

export default MagicLinkLoginPage
