import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

import * as AuthActions from '../../redux/modules/auth';

class Login extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired
  }

  getStyles() {
    return {
      center: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 10
      },
      paper: {
        maxHeight: 400,
        maxWidth: 400,
        textAlign: 'center',
        padding: '20px 40px'
      },
      submit: {
        marginTop: 10,
        marginBottom: 20,
        width: '100%'
      }
    };
  }

  render() {
    const styles = this.getStyles();

    return (
        <div style={styles.center}>
          <Paper style={styles.paper}>
            <Avatar style={{ height: 100, width: 100 }}/><br/>
            <TextField ref='identity'
                       hintText='email'
                       floatingLabelText='email'
                       defaultValue='john.doe@example.com'
                       onKeyDown={::this.submit} /><br/>
            <TextField ref='password'
                       hintText='password'
                       floatingLabelText='password'
                       type='password'
                       defaultValue='qwertyuiop'
                       onKeyDown={::this.submit} /><br />
            <RaisedButton style={styles.submit}
                          label='Submit'
                          onTouchTap={::this.submit}
                          primary />
          </Paper>
        </div>
    );
  }

  submit(event) {
    const { dispatch } = this.props;
    const { user } = this.props;
    const actions = bindActionCreators(AuthActions, dispatch);
console.log(this.refs.password.input.value)
    const identity = this.refs.identity.input.value;
    const password = this.refs.password.input.value;

    if (event.type === 'keydown' && event.keyCode !== 13) return;

    actions.login(identity, password);
    //TODO validate based on response
    this.props.history.push('/app');
  }
}

export default connect(state => ({ user: state.user }))(Login);
