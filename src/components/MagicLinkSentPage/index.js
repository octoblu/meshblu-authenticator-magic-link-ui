import React from "react"

import ErrorState from "zooid-error-state"

import Page from "../Page"
import styles from "./styles.css"

const propTypes = {}

const MagicLinkSentPage = () => {
  return (
    <Page width="small" className={styles.root}>
      <ErrorState title="Magic Link sent!" description="Please check your email" />
    </Page>
  )
}

MagicLinkSentPage.propTypes = propTypes

export default MagicLinkSentPage
