import { ADD_TOKEN_TO_STATE, AUTHORIZE_USER, SET_VALUE_FROM_LOGIN, SET_VALUE } from './types'

export const tokenToState = (value) => ({
    type: ADD_TOKEN_TO_STATE,
    value
})

export const authorizeUser = (value) => ({
    type: AUTHORIZE_USER,
    value
})

export const setValue = (name, value) => ({
    type: SET_VALUE,
    name,
    value,
})

export const setValueFromLogin = (name, value) => ({
    type: SET_VALUE_FROM_LOGIN,
    name,
    value,
})