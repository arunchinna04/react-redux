import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class ParentDetails extends Component {


  render() {
    return (
      <div>
        <div className="row">
           <div className="col-lg-4">
              <TextField hintText="Mother Name" floatingLabelText="Mother Name"/>
           </div>
            <div className="col-lg-4">
              <TextField hintText="Address" floatingLabelText="Address"/>
           </div>
            <div className="col-lg-4">
              <TextField hintText="Contact Number" floatingLabelText="Contact Number"/>
           </div>
       
            <div className="col-lg-4">
              <TextField hintText="Father Name" floatingLabelText="Father Name"/>
           </div>
            <div className="col-lg-4">
              <TextField hintText="Address" floatingLabelText="Address"/>
           </div>
            <div className="col-lg-4">
              <TextField hintText="Contact Number" floatingLabelText="Contact Number"/>
           </div>
        </div>
      </div>
    );
  }
}

export default connect()(ParentDetails);
