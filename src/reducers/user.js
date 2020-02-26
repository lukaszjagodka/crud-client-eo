// import { ADD_USER_FROM_LOGIN} from '../actions/types'

const initialState = {
    email: '',
    token: '',
    isAuthenticated: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        // case ADD_USER_FROM_LOGIN:
        //     return {
        //         ...state,
        //         userFromLogin: {
        //             email: action.value.email,
        //             password: action.value.password
        //         },
        //     }
        // case 'ADD_EMAIL_FROM_LOGIN':
        //     console.log(action.value)
        //     return {
        //         ...state,
        //         email: action.value
        //     }
        // case 'ADD_TOKEN_TO_STATE':
        //     console.log(action.value, 'token')
        //     return {
        //         ...state,
        //         token: action.value
        //     }
        case 'AUTHORIZE_USER':
            return {
                ...state,
                isAuthenticated: action.value
            }
        default:
            return state;
    }
}

export default userReducer;