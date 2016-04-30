import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import AppBar from '../../containers/AppBar';
class Teacher extends Component {
  
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

        Welcome Teacher

          <FloatingActionButton style={styles.addContent}
                                onTouchTap={() => {
                                  history.pushState(null, '/post/new');
                                }}>
          <ContentAdd />
          </FloatingActionButton>
        </div>
    );
  }
}

export default connect()(Teacher);
