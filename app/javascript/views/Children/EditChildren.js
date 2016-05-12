import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import  FloatingActionButton  from 'material-ui/FloatingActionButton';


class EditChildren extends Component {
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

           Edit Children detailss

          
        </div>
    );
  }
}

export default connect()(EditChildren);
