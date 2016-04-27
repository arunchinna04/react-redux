import React, { PropTypes, Component } from 'react';
import Router, {Link} from 'react-router';
import {connect} from 'react-redux';
import AppBar from '../../containers/AppBar';
import NavBar from '../../containers/NavBar';
import * as UserActions from '../../redux/modules/users';

class App extends Component {
    render() {
        const { user } = this.props;
        console.log('in app',user,this.props)
        return (
          <div>
            <AppBar />
            <NavBar MenuItem={user}/>
          </div>  
        );
    }
}


export default connect(state => ({ user: state }))(App);

