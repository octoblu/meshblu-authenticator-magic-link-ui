import superagent from "superagent"
import { browserHistory } from 'react-router'
import { createAction, createReducer } from 'redux-act'

export const generateLinkRequest = createAction('links/request')
export const generateLinkSuccess = createAction('links/success')
export const generateLinkFailure = createAction('links/failure')
export const setDomainAction = createAction('links/set/domain')
export const setLoginUrlAction = createAction('links/set/loginUrl')

export const generateLink = ({ domain, email, loginUrl }) => {
  return dispatch => {
    dispatch(generateLinkRequest())
    superagent
      .post(`https://magic-link.${domain}/links`)
      .send({ email, loginUrl })
      .set("Accept", "application/json")
      .set("Content-Type", "application/json")
      .end((error, res) => {
        if (res && !res.ok && res.body.error) {
          return dispatch(generateLinkFailure(new Error(res.body.error)))
        }
        if (error) {
          return dispatch(generateLinkFailure(error))
        }
        browserHistory.push("/sent")
        dispatch(generateLinkSuccess())
      })
    return
  }
}

export const setDomain = (domain) => {
  return dispatch => {
    dispatch(setDomainAction(domain))
  }
}

export const setLoginUrl = (loginUrl) => {
  return dispatch => {
    dispatch(setLoginUrlAction(loginUrl))
    return
  }
}

const initialState = {
  busy: false,
  error: null,
  domain: 'octoblu.com',
  loginUrl: null,
}

export default createReducer({
  [generateLinkRequest]: (state) => ({
    ...state,
    busy: true,
    error: null,
  }),
  [generateLinkSuccess]: () => initialState,
  [generateLinkFailure]: (state, error) => ({
    ...state,
    busy: false,
    error: error,
  }),
  [setDomainAction]: (state, domain) => ({
    ...state,
    domain: domain || initialState.domain,
  }),
  [setLoginUrlAction]: (state, loginUrl) => ({
    ...state,
    loginUrl,
  }),
}, initialState)
