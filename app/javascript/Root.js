import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';
import { store } from './redux';
import withMaterialUI from './decorators/withMaterialUI';
import * as hooks from './hooks';
// Redux DevTools
import DevTools from './containers/DevTools';


import Login from './views/Login';
import App from './views/App';
<<<<<<< HEAD
import Children from './views/Children';
import AddChildren from './views/Children/AddChildren';
=======
import DashBoard from './views/DashBoard';
import Student from './views/Student';
import AddStudent from './views/Student/AddStudent';
>>>>>>> 33fb552a863d0bcc94fdb56df45739d470708785
import Teacher from './views/Teacher';

hooks.bootstrap(store)();

@withMaterialUI
export default class Root extends Component {
  render() {
    return (
        <div>
          <Provider store={store}>
            <Router history={createBrowserHistory()}>
              <Route>
                <Route path='/' component={Login}/>
                <Route name="app" path="/app" component={App} onEnter={hooks.getMenu(store)}>
<<<<<<< HEAD
                    <IndexRoute />
                    <Route path='children' component={Children} onEnter={hooks.getChildren(store)}/>
                    <Route path='/children/:id' component={AddChildren}/>
                    <Route path='/children/new' component={AddChildren}/>
                    <Route path='teacher' component={Teacher} />
=======
                    <IndexRoute component={DashBoard}/>
                    <Route path='students' component={Student} />
                    <Route path='/students/new' component={AddStudent}/>
                    <Route path='teachers' component={Teacher} />
>>>>>>> 33fb552a863d0bcc94fdb56df45739d470708785
                    
                    
                 </Route>  
              </Route>  
            </Router>
          </Provider>
          
        </div>

        // <DevTools store={store} />
       // <Route>
       //     <Route path="/" component={Login} />
       //     <Route name="app" path="/app" component={App} onEnter={loadData}>
       //       <IndexRoute component={DashBoard}/>
       //       <Route name="myAccount" path="myAccount" component={Foo}/>
       //       <Route name="attendance" path="attendance" component={Foo}/>
       //       <Route name="students" path="students" component={StudentList}/>
       //        <Route path="students/:id" component={StudentDetail}/>
       //       <Route name="teachers" path="teachers" component={Table}/>
       //      </Route>
       //     <Route path="*" component={PageNotFound} status={404}/>
       // </Route>

    );
  }
};
