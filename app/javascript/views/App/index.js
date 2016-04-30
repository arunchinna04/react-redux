import React, { PropTypes, Component } from 'react';
import Router, {Link} from 'react-router';
import {connect} from 'react-redux';
import AppBar from '../../containers/AppBar';
import Spinner from '../../components/Spinner';

class App extends Component {
   
     getStyles() {
    return {
      main: {
        maxWidth: 950,
        margin: '0 auto',
        paddingTop: 10
      }
    };
  }

    render() {
        const styles = this.getStyles();
       
        const {children} = this.props;
        

        return (
          <div>
            <AppBar/>
              <main style={styles.main}>
            {children}
            
          </main>
          </div>  
        );
    }
}


export default connect(state => ({ user: state.users }))(App);

