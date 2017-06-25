import React, { Component } from 'react';

import style from '../../style/bpanel.css';

export default class BPanel extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.message = { headerText: "", bodyText: "" };
        if (props.getInfo.jsonItem) {
            this.message = props.getInfo.jsonItem;
        }
     
    }
    
    render() {

        
        this.cName = "outer pn-" + `${this.props.getInfo.color}`;

        return (
            <div className={this.cName}>
                <div className="top">
                    <h4>{this.message.name}</h4>
                </div>
                <div className="bottom">
                    <p>{this.message.body}</p>
                </div>
            </div>
        )
    }




}


