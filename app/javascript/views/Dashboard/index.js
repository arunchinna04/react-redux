import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Paper } from 'material-ui';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui';
class Dashboard extends Component {
  static contextTypes = {
    history: PropTypes.object.isRequired
  }
 
 

  getStyles() {
    return {
      paper: {
        height: 100,
        width: 200,
        marginRight: 26,
        marginBottom:10,
        color:'#fff',
        background:'#ff8a65',
        textAlign: 'center',
        display: 'inline-block'
      }
    };
  }

  widgetPrepare(){
    return{
      spacing:{
        marginRight: 20
      }
    };
  }

  dashboardCountsStyle() {
    return {
      dashboardWidgets: {
        marginLeft: 20,
        position: 'absolute'        
      } 
    };
  }

 widgetBlock(){
    return {
      widgetBlock:{
        border:'1px solid #ddd',
        padding:5,
        float:'left',
        width:'70%',
        boxShadow:'0 1px 1px rgba(0,0,0,0.05)'
      }
    };
 } 

 widgetBlock25(){
    return {
        style:{
          border:'1px solid #ddd',
          padding:5,
          width:'20%',
          float:'left',
          marginLeft:5,
          boxShadow:'0 1px 1px rgba(0,0,0,0.05)'
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

dasboardStyle(){
  return {
    presets:{
      fontFamily:'Trebuchet MS',
      fontSize:13
    }
  }
}    

  render() {

     
   const { history } = this.context;
   const styles = this.getStyles();
   const widgetstyle = this.dashboardCountsStyle();
   const widgetBlock = this.widgetBlock();
   const panelHeading = this.panelHeading();
   const panelTitle = this.panelTitle();
   const dasboardStyle = this.dasboardStyle();
   const widgetBlock25 = this.widgetBlock25();
    return (
        <div style={dasboardStyle.presets}>
          <Paper style={styles.paper} zDepth={1} rounded={false} >
            <div style={widgetstyle.dashboardWidgets}>
               
              <h2>35</h2>Students
            </div>
          </Paper>
          <Paper style={styles.paper} zDepth={1} rounded={false}> 
            <div style={widgetstyle.dashboardWidgets}>
               
              <h2>43</h2>Teachers
            </div>
          </Paper>
          <Paper style={styles.paper} zDepth={1} rounded={false}>
          <div style={widgetstyle.dashboardWidgets}>
               
              <h2>12</h2>Batches
            </div>
          </Paper>
          <Paper style={styles.paper} zDepth={1} rounded={false}>
          <div style={widgetstyle.dashboardWidgets}>
               
              <h2>73</h2>Courses
            </div>
          </Paper>
          <div style={widgetBlock.widgetBlock}>
              <div style={panelHeading.header} >
                <h2 style={panelTitle.heading}>Task Manager</h2>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Description</TableHeaderColumn>
                    <TableHeaderColumn>Priority</TableHeaderColumn>
                    <TableHeaderColumn>Date</TableHeaderColumn>
                    <TableHeaderColumn>Assigned To</TableHeaderColumn>
                    <TableHeaderColumn>Status</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableRowColumn>Teacher Mapping</TableRowColumn>
                    <TableRowColumn>High</TableRowColumn>
                    <TableRowColumn>10 May 2016</TableRowColumn>
                    <TableRowColumn>John</TableRowColumn>
                    <TableRowColumn>Assigned</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Teacher Mapping</TableRowColumn>
                    <TableRowColumn>High</TableRowColumn>
                    <TableRowColumn>10 May 2016</TableRowColumn>
                    <TableRowColumn>John</TableRowColumn>
                    <TableRowColumn>Assigned</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Teacher Mapping</TableRowColumn>
                    <TableRowColumn>High</TableRowColumn>
                    <TableRowColumn>10 May 2016</TableRowColumn>
                    <TableRowColumn>John</TableRowColumn>
                    <TableRowColumn>Assigned</TableRowColumn>
                  </TableRow>
                   
                </TableBody>
              </Table>
          </div>           
           <div style={widgetBlock25.style}>
              <div style={panelHeading.header} >
                <h2 style={panelTitle.heading}>Todo List</h2>
              </div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHeaderColumn>Todo</TableHeaderColumn>
                     
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableRowColumn>Teacher Mapping</TableRowColumn>
                     
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Teacher Mapping</TableRowColumn>
                    
                  </TableRow>
                  <TableRow>
                    <TableRowColumn>Teacher Mapping</TableRowColumn>
                     
                  </TableRow>
                   
                </TableBody>
              </Table>
          </div> 
        </div>
    );
  }
}

export default connect()(Dashboard);

