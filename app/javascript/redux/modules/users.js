const FETCH_USERS = 'users/FETCH_USERS';
const FETCH_MENU = 'users/FETCH_MENU';

const initialState = [];

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
  case FETCH_USERS:
    return [...payload];
   case FETCH_MENU:{
    console.log('payload',...payload)
    return [...payload];
   }
    
   default:
    return state;
  }
}

import * as urls from '../../config/urls';
import {read, get } from './utils/fetch';

export function fetchUsers() {
  return async (dispatch) => {
    const response = await read(`${urls.api}/user`);
    const posts = await response.json();

    dispatch({
      type: FETCH_USERS,
      payload: posts
    });
  };
}

export function fetchAuthorization() {
  return async (dispatch) => {
    const response = get(`${urls.api}/menu`);
    //const posts = await response.json();

    dispatch({
      type: FETCH_MENU,
      payload: response
    });
  };
}

