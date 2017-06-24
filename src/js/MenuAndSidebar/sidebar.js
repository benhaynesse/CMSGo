import React, {Component} from 'react';

import style from '../../style/side-menu.css';
class Sidebar extends Component{

    closeSidebar(){
        this.props.closeSideBar();
    }

    render(){
        
        //If status is true then open sidebar. Status is set by clicking from the menu.
        if(this.props.status){
            let width;
            if(this.props.width){
                width=this.props.width;
            }else{
                width="250px";
            }
            document.getElementById('side-menu').style.width = width;
        }else{
            if(document.getElementById('side-menu')){
                document.getElementById('side-menu').style.width = '0';
            }            
        }

        //Get Navigation Bar items and create a list for rendering.
        let navItems;
        if(this.props.navItems){
            navItems = this.props.navItems.map(item => {
                return(
                    <a key={item+1} href="#">{item}</a>
                );
            });
        }

        
        return(            
                <ul id="side-menu" className="side-nav">
                <a href="#" className="btn-close" onClick={()=>this.closeSidebar()}>&times;</a>
                {navItems}
                </ul>
        )
    }

}



export default Sidebar;