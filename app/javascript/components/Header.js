import React, { PropTypes, Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Styles from 'material-ui/Styles';
import Drawer from 'material-ui/Drawer';
import {List, ListItem} from 'material-ui/List';
import IconMenu  from 'material-ui/IconMenu';
import {Link} from 'react-router';



import {ActionAccountCicle,NavigationMoreVert}
from 'material-ui';
import SocialGithub from '../../images/GitHub-Mark-Light-120px-plus.png';

export default class Header extends Component {
   
   constructor(props) {
    super(props);
    this.state = {open: false};
  }

  handleToggle = () => this.setState({open: !this.state.open});
   // handleToggle(){
   //   this.refs.leftNav.toggle();
   // }

  static contextTypes = {
    history: PropTypes.object.isRequired
  }
 
  render() {
    const { history } = this.context;
    const {menuItem} = this.props;

    return (
    <div>
        <AppBar title='Welcome To Redux'
                onLeftIconButtonTouchTap={this.handleToggle}
                 />
          <Drawer
                open={this.state.open}
                ref="leftNav"
                className = "left-nav"
                docked={true}>
                  
                      <List onClick={this.handleToggle}>
                   {menuItem.map(menu => (
                       <ListItem index={menu.id} key={menu.name} onClick={() => history.pushState(null,menu.route)} primaryTogglesNestedList={true}>{menu.name}</ListItem>
                  ))} 
                </List>
                   
                    </Drawer>
      </div>              
    );
  }
}


                    
     