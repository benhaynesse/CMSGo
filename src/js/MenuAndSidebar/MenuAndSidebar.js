import React, { Component } from 'react';

import MenuBar from './MenuBar';
import SideBar from './Sidebar';




class MenuAndSidebar extends Component {

    openSideBar() {
        this.props.toggleSideBar();
    }

    closeSideBar() {
        this.props.toggleSideBar();
    }

    

    render() {
               
        return (
            <div>
                <MenuBar openSideBar={() => this.openSideBar()} status={this.props.status}
                    navItems={this.props.navItems} />
            <SideBar closeSideBar={() => this.closeSideBar()} status={this.props.status}
                    navItems={this.props.navItems} width={this.props.width}/>
            </div>
        )
    }
}



export default MenuAndSidebar;