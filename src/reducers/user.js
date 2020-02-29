const initialState = {
    name: '',
    email: '',
    password: '',
    emailLogin: '',
    passwordLogin: '',
    isAuthenticated: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type){
        case 'AUTHORIZE_USER':
            return {
                ...state,
                isAuthenticated: action.value
            }
        case 'SET_VALUE':
            return {
                ...state,
                [action.name]: action.value,
            }
        case 'SET_VALUE_FROM_LOGIN':
            return {
                ...state,
                [action.name]: action.value
            }
        default:
            return state;
    }
}

export default userReducer;