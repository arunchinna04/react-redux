import React, {Component} from 'react';

import {Link} from 'react-router';
import {connect} from 'react-redux';
import {AppBar,LeftNav,MenuItem,List,ListItem  } from 'material-ui';

import { browserHistory } from 'react-router';



class NavBar extends Component{
    

    constructor(props) {
     super(props);
     console.log('in nav bar',this.state)
     this.state = {open: false};
    }

  handleToggle = () => this.setState({open: !this.state.open});

    render() {
        const {menuItem} = this.props;
        
        return (
             <div>
                      
                    <LeftNav
                      open={this.state.open}
                      ref="leftNav"
                      className = "left-nav"
                      docked={true}>
                        <div onClick={this.handleToggle}>
                            <List>
                                {MenuItem.map(menu => (
                                     <ListItem  onClick={() => this.props.dispatch(pushState(null,menu.route))} primaryTogglesNestedList={true}>{menu.name}</ListItem>
                                ))} 
                            </List>
                        </div>          
                    </LeftNav>
                    
                 </div>
        )
    }
};


export default connect()(NavBar);


