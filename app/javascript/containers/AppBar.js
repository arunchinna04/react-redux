import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';

class AppBar extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array
    ])
  }



  render() {
    
    const { user } = this.props;

    return (
        <div>
          <Header menuItem={user}/>
         
        </div>
    );
  }
}

export default connect(state => ({ user: state.users }))(AppBar);
