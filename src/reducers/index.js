import { combineReducers } from 'redux';
import user from './user';
import courses from './courses';

const rootReducer = combineReducers({
  user,
  courses
});

export default rootReducer;