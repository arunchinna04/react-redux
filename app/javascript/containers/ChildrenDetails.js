import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';


class ChildrenDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 0};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
        <div className="row">
           <div className="col-lg-4">
              <TextField hintText="First Name" floatingLabelText="First Namee"/>
           </div>
           <div className="col-lg-4">
              <TextField hintText="Middle Name" floatingLabelText="Middle Name"/> 
          </div>
          <div className="col-lg-4">
              <TextField hintText="Last Name" floatingLabelText="Last Name"/> 
          </div>
         <div className="col-lg-4">
            <SelectField value={this.state.value} onChange={this.handleChange} floatingLabelText="Gender">
               <MenuItem value={0} primaryText="Select" />
               <MenuItem value={1} primaryText="Boy" />
               <MenuItem value={2} primaryText="Girl" />
            </SelectField>   
         </div>
         <div className="col-lg-4">
             <DatePicker hintText="Date of Birth" floatingLabelText="Date of Birth" /> 
         </div>
         <div className="col-lg-4">
            <TextField hintText="Nick Name" floatingLabelText="Nick Name"/> 
        </div>
        </div>
    );
  }
}

export default connect()(ChildrenDetails);
