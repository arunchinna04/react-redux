import { bindActionCreators } from 'redux';
import * as UserActions from './redux/modules/users';
import * as ChildrenActions from './redux/modules/childrens';

//if needed on start
export function bootstrap({ dispatch }) {
  return () => {
   
  };
}

export function getMenu({ dispatch }) {
  const userActions = bindActionCreators(UserActions, dispatch);
  return () => {
    userActions.fetchAuthorization();
  };
  
}

export function getChildren({ dispatch }) {
  const childrenActions = bindActionCreators(ChildrenActions, dispatch);
  return () => {
    childrenActions.fetchChildrens();
  };
  
}

