import React from "react"
import get from 'lodash/get'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MagicLinkLoginPage from "../components/MagicLinkLoginPage"
import { generateLink, setDomain, setLoginUrl } from "../ducks/magic-link"

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  busy: PropTypes.bool,
  error: PropTypes.object,
  loginUrl: PropTypes.string,
  domain: PropTypes.string.isRequired,
}

class MagicLinkLogin extends React.Component {
  componentDidMount() {
    this.props.dispatch(setDomain(get(this.props, "location.query.domain")))
    this.props.dispatch(setLoginUrl(get(this.props, "location.query.callbackUrl", `${window.location.protocol}//${window.location.host}`)))
  }

  handleLogin = ({ email }) => {
    const { loginUrl, domain } = this.props
    this.props.dispatch(generateLink({ domain, email, loginUrl }))
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
