import React, { PropTypes, Component } from 'react';
import Router, {Link} from 'react-router';
import {connect} from 'react-redux';
import AppBar from '../../containers/AppBar';

class App extends Component {
    render() {
        return (
          <div>
            <AppBar/>
           
          </div>  
        );
    }
}


export default connect(state => ({ user: state.users }))(App);

