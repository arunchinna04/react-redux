const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

const initialState = {
  user: {
    id: 1,
    username: 'johndoe',
    email: 'john.doe@gmail.com',
    password: 'demo',
    avatar: 'https://randomuser.me/api/portraits/med/women/1.jpg',
    firstname: 'John',
    lastname: 'Doe'
  }
};
import * as urls from '../../config/urls';
import {post, get } from './utils/fetch';

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  switch (type) {
  case LOGIN_SUCCESS:{
      return payload;
    }
  default:
    return state;
  }
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

export function login(username, password) {
  return (dispatch, getState) => {
    dispatch({
      type: LOGIN,
      payload: {
        username,
        password
      }
    });
  
    post(`${urls.api}/auth`).then(function(response){       
       dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data
      });
    })
  
  };
}

export function register(username, email, password) {
  return (dispatch, getState) => {
    dispatch({
      type: REGISTER,
      payload: {
        username,
        email,
        password
      }
    });

    // Do something async here then dispatch LOGIN_SUCCESS or LOGIN_FAILURE
    setTimeout(() => {
      dispatch({
        type: REGISTER_FAILURE,
        payload: new Error(),
        error: true
      });
    }, 1000);
  }
}
