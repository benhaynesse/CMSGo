import React, { Component } from 'react';

import style from '../../style/menu.css';

class MenuBar extends Component {

    //Sets the state in main class to true so side bar will open.
    openSideBar(){
        this.props.openSideBar();
    }

    render() {   
        //Get the navigation items and puts them in an item array for rendering.   
        let navItems;
        if(this.props.navItems){
            navItems = this.props.navItems.map(item => {
                return(
                    <li key={item+1}><a href="#">{item}</a></li>
                );
            });
        }
        
        return (
            <nav className="navbar">
                <span className="open-slide">
                    <a href="#" onClick={()=> this.openSideBar()}>
                        <svg width="30" height="30">
                            <path d="M0,5 30,5" stroke="#FFF" strokeWidth="5" />
                            <path d="M0,14 30,14" stroke="#FFF" strokeWidth="5" />
                            <path d="M0,23 30,23" stroke="#FFF" strokeWidth="5" />
                        </svg>
                    </a>
                </span>

                <ul className="navbar-nav">
                    {navItems}
                </ul>

            </nav>
        )
    }

}



export default MenuBar;