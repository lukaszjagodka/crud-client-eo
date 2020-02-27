// import { ADD_USER_FROM_LOGIN} from '../actions/types'

const initialState = {
    email: '',
    isAuthenticated: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        // case 'ADD_EMAIL_FROM_LOGIN':
        //     console.log(action.value)
        //     return {
        //         ...state,
        //         email: action.value
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