import React, { Component } from 'react';

import style from '../../style/bpanel.css';

export default class BPanel extends Component {

    constructor(props) {
        super(props);
        this.message = { headerText: "", bodyText: "" };
        if (props.getInfo) {
            this.message = props.getInfo;
        }
    }





    render() {

        if (this.props.color) {
            this.PanelColor = this.props.color;
        }
        this.cName = "outer pn-" + `${this.message.color}`;

        return (
            <div className={this.cName}>
                <div className="top">
                    <h4>{this.message.headerText}</h4>
                </div>
                <div className="bottom">
                    <p>{this.message.bodyText}</p>
                </div>
            </div>
        )
    }




}


