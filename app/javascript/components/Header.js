import React, { PropTypes, Component } from 'react';
import { AppBar, IconButton, Styles, LeftNav, List, ListItem } from 'material-ui';
import {Link} from 'react-router';
import IconMenu from 'material-ui/lib/menus/icon-menu';

import NavigationMoreVert from 'material-ui/lib/svg-icons/navigation/more-vert';
import ActionAccountCicle
from 'material-ui/lib/svg-icons/action/account-circle';
import SocialGithub from '../../images/GitHub-Mark-Light-120px-plus.png';

export default class Header extends Component {
   

//handleToggle = () => this.setState({open: !this.state.open});
   handleToggle(){
     this.refs.leftNav.toggle();
   }

  static contextTypes = {
    history: PropTypes.object.isRequired
  }
 
  render() {
    const { history } = this.context;
    const {menuItem} = this.props;

    return (
    <div>
        <AppBar title='Welcome To Redux'
                onLeftIconButtonTouchTap={this.handleToggle.bind(this)}
                 />
          <LeftNav
                ref="leftNav"
                className = "left-nav"
                docked={true}>
                  
                      <List onClick={this.handleToggle.bind(this)}>
                   {menuItem.map(menu => (
                       <ListItem index={menu.id} key={menu.name} onClick={() => history.pushState(null,menu.route)} primaryTogglesNestedList={true}>{menu.name}</ListItem>
                  ))} 
                </List>
                   
                    </LeftNav>
      </div>              
    );
  }
}


                    
     