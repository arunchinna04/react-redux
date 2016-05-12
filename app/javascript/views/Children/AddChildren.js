import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import StepperBar from '../../containers/StepperBar';

class AddChildren extends Component {
  static contextTypes = {
    history: PropTypes.object.isRequired
  }
  getStyles() {
    return {
      addContent: {
        position: 'fixed',
        right: 20,
        bottom: 20,
        zIndex: 100
      }
    };
  }

  render() {
   const styles = this.getStyles();
   const { history } = this.context;

    return (
       <div>

         
          <StepperBar />
       </div>
    );
  }
}

export default connect()(AddChildren);
