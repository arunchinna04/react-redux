import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ChildrenDetails from './ChildrenDetails';
import ParentDetails from './ParentDetails';

import * as ChildrenActions from '../redux/modules/childrens';
/**
 * A contrived example using a transition between steps
 */
class StepperBar extends Component {

 

  handleChange = (event, index, value) => this.setState({value});

  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
    childrenData:{},
    parentData:{},
  };

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };


  saveChildrendetails = (stepIndex) => {

    const { dispatch } = this.props;
    const actions = bindActionCreators(ChildrenActions, dispatch);
    if(stepIndex == 0){
          const firstName = this.refs.firstName.input.value;
         const middleName = this.refs.middleName.input.value;
         const lastName = this.refs.lastName.input.value;
         const gender = this.state.value;
         const dob = this.refs.dob.state.hasValue;
         const nickName = this.refs.nickName.input.value; 
         console.log(firstName,middleName,lastName,gender,dob,nickName);
         const childData = {'firstName':firstName,'middleName':middleName,'lastName':lastName,'gender':gender,'dob':dob,'nickName':nickName}
         this.setState({childrenData:childData});
    }else if(stepIndex == 1){
            const motherName = this.refs.motherName.input.value;
            const fatherName = this.refs.fatherName.input.value;
            const address1 = this.refs.address1.input.value;
            const address2 = this.refs.address2.input.value;
            const contactNo1 = this.refs.contactNo1.input.value;    
            const contactNo2 = this.refs.contactNo2.input.value;
            console.log(motherName,fatherName);
            const parentData = {'motherName':motherName,'fatherName':fatherName,'address1':address1,'address2':address2,'contactNo1':contactNo1,'contactNo2':contactNo2}
            this.setState({parentData:parentData});   
    }else{
      var request = Object.assign(this.state.childrenData, this.state.parentData);
      console.log(request);
      actions.createChildren(request);
    }
    


  }

  handleNext = () => {
    const {stepIndex} = this.state;
    
    if (!this.state.loading) {
      
      
        this.saveChildrendetails(stepIndex)    
      
     
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2,
      }));
    }
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1,
      }));
    }
  };

  getStepContent(stepIndex) {
    const {childrenData } = this.state;

    switch (stepIndex) {
      case 0:
        return (
          <div>
             <div className="row">
              Children Personal Information
           </div>
           <hr/>
           <div style={{width:'95%', margin: '0px auto'}} className="row">

                 <div className="col-lg-4 col-xs-6 col-sm-4 col-md-4">
                    <TextField ref='firstName' hintText="First Name" floatingLabelText="First Name"/>
                 </div>
                 <div className="col-lg-4 col-xs-6 col-sm-4 col-md-4">
                    <TextField ref='middleName' hintText="Middle Name" floatingLabelText="Middle Name"/> 
                </div>
                <div className="col-lg-4 col-xs-6 col-sm-4 col-md-4">
                    <TextField ref='lastName' hintText="Last Name" floatingLabelText="Last Name"/> 
                </div>
               <div className="col-lg-4 col-xs-6 col-sm-4 col-md-4">
                  <SelectField ref='gender' value={this.state.value} onChange={this.handleChange} floatingLabelText="Gender">
                     <MenuItem value={''} primaryText="Select" />
                     <MenuItem value={'boy'} primaryText="Boy" />
                     <MenuItem value={'girl'} primaryText="Girl" />
                  </SelectField>   
               </div>
               <div className="col-lg-4 col-xs-6 col-sm-4 col-md-4">
                   <DatePicker ref='dob' hintText="Date of Birth" floatingLabelText="Date of Birth" /> 
               </div>
               <div className="col-lg-4 col-xs-6 col-sm-4 col-md-4">
                  <TextField ref='nickName' hintText="Nick Name" floatingLabelText="Nick Name"/> 
              </div>
          </div> 


            
          </div>
        );
      case 1:
        return (
          <div>
             <div className="row">
           <div className="col-lg-4">
              <TextField ref="motherName" hintText="Mother Name" floatingLabelText="Mother Name"/>
           </div>
            <div className="col-lg-4">
              <TextField ref="address1" hintText="Address" floatingLabelText="Address"/>
           </div>
            <div className="col-lg-4">
              <TextField ref="contactNo1" hintText="Contact Number" floatingLabelText="Contact Number"/>
           </div>
       
            <div className="col-lg-4">
              <TextField ref="fatherName" hintText="Father Name" floatingLabelText="Father Name"/>
           </div>
            <div className="col-lg-4">
              <TextField ref="address2" hintText="Address" floatingLabelText="Address"/>
           </div>
            <div className="col-lg-4">
              <TextField ref="contactNo2" hintText="Contact Number" floatingLabelText="Contact Number"/>
           </div>
        </div>
          </div>
        );
      case 2:
        return (
          <p>
            {childrenData.firstName} Details will be Enrolled
          </p>
        );
      default:
        return 'Invalid';
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    

    if (finished) {
      return (
        <div style={{margin:'0 auto'}} >
          <p>
            Successfully Enrolled<br/>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
               Click here
            </a> to Enroll another child.
          </p>
        </div>
      );
    }

    return (
      <div >
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12,marginLeft: 400}}>
          
          <RaisedButton
            
            label={stepIndex === 2 ? 'Enroll' : 'Save & Continue'}
            primary={true}
            onTouchTap={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;

    return (
    <div>
      <div style={{width: '70%', margin: '0px auto'}}>
       
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Children Details</StepLabel>
          </Step>
          <Step>
            <StepLabel>Parent/Guardian</StepLabel>
          </Step>
          <Step>
            <StepLabel>Enroll</StepLabel>
          </Step>
        </Stepper>
       </div>
       
          {this.renderContent()}
        
      </div>
    );
  }
}

export default connect()(StepperBar);