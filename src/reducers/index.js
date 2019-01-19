import { combineReducers } from 'redux';
import users from './users';
import id from './id';

const allReducers = combineReducers({
  users,
  id,
});

export default allReducers;
