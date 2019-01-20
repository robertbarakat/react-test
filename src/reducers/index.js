import { combineReducers } from 'redux';
import users from './users';
import id from './id';
import logStatus from './logStatus';

const allReducers = combineReducers({
  users,
  id,
  logStatus,
});

export default allReducers;
