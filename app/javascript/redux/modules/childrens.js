const FETCH_CHILDRENS = 'childrens/FETCH_CHILDRENS';
const FETCH_CHILDRENS_SUCCESS = 'childrens/FETCH_CHILDRENS_SUCCESS';
const FETCH_CHILDRENS_FAILURE = 'childrens/FETCH_CHILDRENS_FAILURE';

const CREATE_CHILDREN = 'childrens/CREATE_CHILDREN';
const CREATE_CHILDREN_SUCCESS = 'childrens/CREATE_CHILDREN_SUCCESS';
const CREATE_CHILDREN_FAILURE = 'childrens/CREATE_CHILDREN_FAILURE';

const READ_CHILDREN = 'childrens/READ_CHILDREN';
const READ_CHILDREN_SUCCESS = 'childrens/READ_CHILDREN_SUCCESS';
const READ_CHILDREN_FAILURE = 'childrens/READ_CHILDREN_FAILURE';

const UPDATE_CHILDREN = 'childrens/UPDATE_CHILDREN';
const UPDATE_CHILDREN_SUCCESS = 'childrens/UPDATE_CHILDREN_SUCCESS';
const UPDATE_CHILDREN_FAILURE = 'childrens/UPDATE_CHILDREN_FAILURE';

const REMOVE_CHILDREN = 'childrens/REMOVE_CHILDREN';
const REMOVE_CHILDREN_SUCCESS = 'childrens/REMOVE_CHILDREN_SUCCESS';
const REMOVE_CHILDREN_FAILURE = 'childrens/REMOVE_CHILDREN_FAILURE';

import * as urls from '../../config/urls';
import {post, get } from './utils/fetch';



const initialState = [];

function indexOfObjectById(arr, obj) {
  for (let i = 0, length = arr.length; i < length; i++) {
    if (arr[i].id === obj.id) return i;
  }
}

export default function reducer(state = initialState, action = {}) {
  const { type, payload } = action;
console.log('type',type)
  switch (type) {
  case FETCH_CHILDRENS_SUCCESS:
    return [...payload];

  case CREATE_CHILDREN_SUCCESS:
    return [{
      id: (state.length === 0)
          ? 1
          : Math.max.apply(state.map(post => post.id)) + 1,
      title: payload.title,
      subtitle: payload.subtitle,
      poster: payload.poster,
      body: payload.body,
      user: payload.user
    }, ...state];

  case UPDATE_CHILDREN_SUCCESS:
    const index = indexOfObjectById(state, payload);
    const oldPost = state[index];
    const newState = [...state];
    newState.splice(index, 1, {...oldPost, ...payload});

    return newState;

  case REMOVE_CHILDREN_SUCCESS:
    return state.filter(blogpost =>
        blogpost.id !== payload.id
    );

  default:
    return state;
  }
}


export function fetchChildrens() {
  console.log('in childrens module')
  return async (dispatch) => {
    dispatch({
      type: FETCH_CHILDRENS,
      meta: {
        fetch: [`/childrens`, {method: 'get'}]
      }
    });
  
    get(`${urls.api}/children`).then(function(response){
      console.log('res',response)
      if(response){
       dispatch({
        type: FETCH_CHILDRENS_SUCCESS,
        payload: response.data
      }); 
     }else{
       dispatch({
        type: FETCH_CHILDRENS_FAILURE,
        payload: response
      });
     }
       
    });
     

  };
}

export function createPost(post) {
  return async (dispatch, getState) => {
    const { auth } = getState();

    post.user = auth.user.id;

    dispatch({
      type: [CREATE_CHILDREN, CREATE_CHILDREN_SUCCESS, CREATE_CHILDREN_FAILURE],
      payload: post,
      meta: {
        fetch: ['/post', {method: 'post', body: JSON.stringify(post)}]
      }
    });
  };
}

export function readPost(id) {
  return async (dispatch) => {
    dispatch({
      type: [READ_CHILDREN, READ_CHILDREN_SUCCESS, READ_CHILDREN_FAILURE],
      meta: {
        fetch: [`/post/${id}`, {method: 'get'}]
      }
    });
  };
}

export function updatePost(post) {
  return async (dispatch) => {
    dispatch({
      type: [UPDATE_CHILDREN, UPDATE_CHILDREN_SUCCESS, UPDATE_CHILDREN_FAILURE],
      payload: post,
      meta: {
        fetch: [`/post/${post.id}`, {method: 'put', body: JSON.stringify(post)}]
      }
    });
  };
}



