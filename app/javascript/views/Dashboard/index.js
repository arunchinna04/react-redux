import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {Paper, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, Tabs, Tab} from 'material-ui';
import FontIcon from 'material-ui/FontIcon';
class Dashboard extends Component {
  static contextTypes = {
    history: PropTypes.object.isRequired
  }
 
 

   
  render() {

   const ReactHighcharts = require('react-highcharts');   
   const { history } = this.context;
   const attendanceChartConfig = {
        chart: {
            type: 'column',
            height: 300,
            width: 540
        },
        credits:{
          enabled:false
        },
        title: {
            text: 'Attendance Report'
        },
        subtitle: {
            text: 'Daily Report'
        },
        xAxis: {
            categories: [
                '17/05',
                '18/05',
                '19/05',
                'Today'
                
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Attendance Count'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        series: [{
            name: 'Teacher',
            data: [4, 13, 7, 12]

        }, {
            name: 'Students',
            data: [25,28,28,32]

        }]
    }; 

    const feeReportConfig = {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Fee Reports'
        },
        xAxis: {
            categories: ['Batch 1','Batch 2','Batch 3','Batch 4']
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'John',
            data: [500, 300, 400, 700]
        }, {
            name: 'Jane',
            data: [200, -200, -300, 200]
        }, {
            name: 'Joe',
            data: [-300, 400, 400, -200]
        },{
            name: 'Paul',
            data: [500, 300, 400, 700]
        }, {
            name: 'Varn',
            data: [200, -200, -300, 200]
        }, {
            name: 'Doe',
            data: [-300, 400, 400, -200]
        }]
    };
    return (
        <div className="presets">
          <Paper className="paper wdiget1" zDepth={1} rounded={false} >
            <div className="dashboardWidgets">
                
              <div className="widegetData"><h2>35</h2>Students</div>
              <div className="widgetIcon"><i className="material-icons">local_library</i></div>
            </div>
          </Paper>
          <Paper className="paper wdiget2" zDepth={1} rounded={false}> 
            <div className="dashboardWidgets">
               
              <div className="widegetData"><h2>43</h2>Teachers</div>
              <div className="widgetIcon"><i className="material-icons">people</i></div>
            </div>
          </Paper>
          <Paper className="paper wdiget3" zDepth={1} rounded={false}>
          <div className="dashboardWidgets">
               
              <div className="widegetData"><h2>12</h2>Batches</div>
              <div className="widgetIcon"><i className="material-icons">class</i></div>
            </div>
          </Paper>
          <Paper className="paper wdiget4" zDepth={1} rounded={false}>
          <div className="dashboardWidgets">
               
              <div className="widegetData"><h2>73</h2>Courses</div>
              <div className="widgetIcon"><i className="material-icons">assignment</i></div>
            </div>
          </Paper>
         
           
          <div className="widgetBlock">
              <Tabs>
                <Tab label="Activity" value="a" >
                  <div>
                     <ReactHighcharts config = {attendanceChartConfig}></ReactHighcharts>
                  </div>
                </Tab>
                <Tab label="Fee Report" value="b">
                  <div>
                     <ReactHighcharts config = {feeReportConfig}></ReactHighcharts>
                  </div>
                </Tab>
              </Tabs>
          </div>
        </div>
    );
  }
}

export default connect()(Dashboard);
 