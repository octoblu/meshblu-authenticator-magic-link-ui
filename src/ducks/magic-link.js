import superagent from "superagent"
import { browserHistory } from 'react-router'
import { createAction, createReducer } from 'redux-act'

export const generateLinkRequest = createAction('links/request')
export const generateLinkSuccess = createAction('links/success')
export const generateLinkFailure = createAction('links/failure')

export const generateLink = ({ email, loginUrl }) => {
  return dispatch => {
    dispatch(generateLinkRequest({ email, loginUrl }))
    superagent
      .post(`http://localhost:3333/links`)
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
      })
    return
  }
}

const initialState = {
  busy: false,
  error: null,
}

export default createReducer({
  [generateLinkRequest]: (state) => ({
    ...state,
    busy: true,
    error: null,
  }),
}, initialState)
