import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import MandS from './MenuAndSidebar/MenuAndSidebar';
import MainBody from './MainDiv/MainBody';

import style from '../style/main.css';

class App extends Component{

    constructor(){
        super();
        this.state={
            sidebar:false            
        }
        this.width = "250px"; 
    }

    toggleSideBar(){
        let status = !this.state.sidebar;
        this.setState({sidebar:status});
    }

    render(){
        let navItems = ["Reddit", "Settings"];

        if(this.state.sidebar){
            document.getElementById('main').style.marginLeft = this.width;
        }else{
            if(document.getElementById('main')){
                document.getElementById('main').style.marginLeft = '0';
            }            
        }

        return (
            <div>
            <MandS navItems={navItems} status={this.state.sidebar}
            toggleSideBar={()=>this.toggleSideBar()}                       
            />
            <div id="main">
                <MainBody/>
            </div>
            </div>
        );
    }
}

export default App;