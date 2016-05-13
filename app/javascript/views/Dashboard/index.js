import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  Paper  from 'material-ui/Paper';

class Dashboard extends Component {
  static contextTypes = {
    history: PropTypes.object.isRequired
  }
 
 getStyles() {
    return {
      paper: {
        height: 100,
        width: 200,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
      }
    };
  }

  render() {

   const { history } = this.context;
   const styles = this.getStyles();
    return (
        <div>
          <Paper style={styles.paper} zDepth={5}/>
          <Paper style={styles.paper} zDepth={5}/>
          <Paper style={styles.paper} zDepth={5}/>
          <Paper style={styles.paper} zDepth={5}/>

        
        </div>
    );
  }
}

export default connect()(Dashboard);
