import { ADD_USER_FROM_LOGIN, ADD_EMAIL_FROM_LOGIN, ADD_PASSWORD_FROM_LOGIN, ADD_TOKEN_TO_STATE, AUTHORIZE_USER } from './types'

export const addUserFromLogin = (value) => ({
    type: ADD_USER_FROM_LOGIN,
    value
});

export const addEmailFromLogin = (value) => ({
    type: ADD_EMAIL_FROM_LOGIN,
    value
})

export const addPasswordFromLogin = (value) => ({
    type: ADD_PASSWORD_FROM_LOGIN,
    value
})

export const tokenToState = (value) => ({
    type: ADD_TOKEN_TO_STATE,
    value
})

export const authorizeUser = (value) => ({
    type: AUTHORIZE_USER,
    value
})