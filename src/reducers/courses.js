import { ADD_COURSES_FROM_FETCH} from '../actions/types'

const initialState = {
    coursesFromFetch: []
}

export const coursesReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_COURSES_FROM_FETCH:
            return {
                ...state,
                coursesFromFetch: action.value
            }
        default:
            return state;
    }
}

export default coursesReducer;