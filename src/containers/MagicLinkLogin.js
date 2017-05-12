import React from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MagicLinkLoginPage from "../components/MagicLinkLoginPage"
import { generateLink } from "../ducks/magic-link"

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  busy: PropTypes.bool,
  error: PropTypes.object,
}

class MagicLinkLogin extends React.Component {
  handleLogin = ({ email }) => {
    const loginUrl = `${window.location.protocol}//${window.location.host}`
    this.props.dispatch(generateLink({ email, loginUrl }))
  }

  render() {
    const { error, busy } = this.props
    return <MagicLinkLoginPage error={error} busy={busy} onLogin={this.handleLogin} />
  }
}

MagicLinkLogin.propTypes = propTypes

function mapStateToProps({ magicLink }) {
  return magicLink
}

export default connect(mapStateToProps)(MagicLinkLogin)
