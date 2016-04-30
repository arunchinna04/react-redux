import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
import AppBar from '../../containers/AppBar';
import {Table, TableHeaderColumn, TableRow, TableHeader, TableRowColumn, TableBody } from 'material-ui';
import { Link } from 'react-router';

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

  render() {
   const styles = this.getStyles();
   const { history } = this.context;
   const { childrens } = this.props;
    return (
        <div>

           
              <Table>
                <TableHeader displaySelectAll={false} adjustForCheckbox ={false}>
                  <TableRow>
                    <TableHeaderColumn>ID</TableHeaderColumn>
                    <TableHeaderColumn>First Name</TableHeaderColumn>
                    <TableHeaderColumn>Last Name</TableHeaderColumn>
                  </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false} >

                 {childrens.map(children => (
                      <TableRow key={children.id}>
                        <TableRowColumn> <Link to={`/app/children/${children.id}`} >{children.id}</Link></TableRowColumn>
                        <TableRowColumn>{children.firstName}</TableRowColumn>
                        <TableRowColumn>{children.lastName}</TableRowColumn>
                      </TableRow>
                  ))}

                </TableBody>
              </Table>



          <FloatingActionButton style={styles.addContent}
                                onTouchTap={() => {
                                  history.pushState(null, 'children/new');
                                }}>
          <ContentAdd />
          </FloatingActionButton>
        </div>
    );
  }
}

export default connect(state => ({ childrens: state.childrens }))(Children);
