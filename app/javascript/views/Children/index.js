import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



import {Table, TableHeaderColumn, TableRow, TableHeader, TableRowColumn, TableBody } from 'material-ui/Table';
import FloatingActionButton  from 'material-ui/FloatingActionButton';
import  RaisedButton  from 'material-ui/RaisedButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
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

 panelTitle(){
    return {
      heading:{
        fontSize:15
      }
    };
 }

panelHeading(){
  return {
    header:{       
      borderBottom: '1px solid #ccc'           
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
   

   const panelHeading = this.panelHeading();
   const panelTitle = this.panelTitle();
 


    return (
        <div>
           <div>
              <div style={panelHeading.header} >
                <h2 style={panelTitle.heading}>Children Details</h2>
              </div>
           
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
          </div>
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
