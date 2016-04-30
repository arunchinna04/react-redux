import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import users from './users';
import childrens from './childrens';


export default combineReducers({
  auth,
  users,
  childrens, 
  form
});
