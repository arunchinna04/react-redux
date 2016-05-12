import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ContentAdd from 'material-ui/lib/svg-icons/content/add';

import {Table, TableHeaderColumn, TableRow, TableHeader, TableRowColumn, TableBody, FloatingActionButton, RaisedButton } from 'material-ui';
import { Link } from 'react-router';

import * as ChildrenActions from '../../redux/modules/childrens';

class Children extends Component {
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
  checkInStudent(data) {
      console.log(data)
     // const actions = bindActionCreators(ChildrenActions, dispatch);
     // actions.login(identity, password);
  }

  render() {
   const styles = this.getStyles();
   const { history } = this.context;
   const { childrens } = this.props;
    return (
        <div>

           
              <Table selectable={false}>
                <TableHeader  displaySelectAll={false} adjustForCheckbox ={false}>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>First Name</TableHeaderColumn>
                    <TableHeaderColumn>Last Name</TableHeaderColumn>
                    <TableHeaderColumn>Check In/Check Out</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} >

                 {childrens.map(children => (
                      <TableRow key={children.id}>
                        <TableRowColumn> <Link to={`/app/children/${children.id}`} >{children.id}</Link></TableRowColumn>
                        <TableRowColumn>{children.firstName}</TableRowColumn>
                        <TableRowColumn>{children.lastName}</TableRowColumn>
                        <TableRowColumn><RaisedButton onTouchTap={this.checkInStudent.bind(this,children)} label={children.checkIn ? "Check Out" : "Check In"}  secondary={!children.checkIn} primary={children.checkIn}   /></TableRowColumn>
                      </TableRow>
                  ))}

                </TableBody>
              </Table>

          <FloatingActionButton style={styles.addContent}
                                onTouchTap={() => {
                                  history.pushState(null, '/app/children/new');
                                }}>
          <ContentAdd />
          </FloatingActionButton>
        </div>
    );    
  }

 
}

export default connect(state => ({ childrens: state.childrens }))(Children);
