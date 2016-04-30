import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import AppBar from '../../containers/AppBar';
class Student extends Component {
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

        Welcome Student

          <FloatingActionButton style={styles.addContent}
                                onTouchTap={() => {
                                  history.pushState(null, 'students/new');
                                }}>
          <ContentAdd />
          </FloatingActionButton>
        </div>
    );
  }
}

export default connect()(Student);
