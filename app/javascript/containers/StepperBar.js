import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import TextField from 'material-ui/TextField';

import ChildrenDetails from './ChildrenDetails';
import ParentDetails from './ParentDetails';
/**
 * A contrived example using a transition between steps
 */
class StepperBar extends Component {

  state = {
    loading: false,
    finished: false,
    stepIndex: 0,
  };

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
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
    switch (stepIndex) {
      case 0:
        return (
          <div>
            <ChildrenDetails />
          </div>
        );
      case 1:
        return (
          <div>
            <ParentDetails />
          </div>
        );
      case 2:
        return (
          <p>
            Try out different ad text to see what brings in the most customers, and learn how to
            enhance your ads using features like ad extensions. If you run into any problems with your
            ads, find out how to tell if they're running and how to resolve approval issues.
          </p>
        );
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    

    if (finished) {
      return (
        <div >
          <p>
            <a
              href="#"
              onClick={(event) => {
                event.preventDefault();
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Click here
            </a> to reset the example.
          </p>
        </div>
      );
    }

    return (
      <div >
        <div>{this.getStepContent(stepIndex)}</div>
        <div style={{marginTop: 24, marginBottom: 12,marginLeft: 400}}>
          
          <RaisedButton
            label="Save & Continue"
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