import axios from "axios";

const initialState = {
    data: null
}

const LOGIN_USER = "LOGIN_USER"
const LOGIN_USER_FULFILLED = "LOGIN_USER_FULFILLED"

const GET_USER = 'GET_USER'
const GET_USER_FULFILLED = "GET_USER_FULFILLED"

const LOGOUT_USER = 'LOGOUT_USER'
const LOGOUT_USER_FULFILLED = 'LOGOUT_USER_FULFILLED'

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN_USER_FULFILLED:
            return { ...state, data: action.payload.data}
        case GET_USER_FULFILLED:
            return {...state, data: action.payload.data}
        case LOGOUT_USER_FULFILLED:
            return {...state, data: null}
        default:
            return state
    }
}

export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/auth/currentUser')
    }
}

export function login(loginInfo) {
    return {
        type: LOGIN_USER,
        payload: axios.post('/auth/login', loginInfo)
    }
}

export function logout() {
    return {
        type: LOGOUT_USER,
        payload: axios.get('/auth/logout')
    }
}