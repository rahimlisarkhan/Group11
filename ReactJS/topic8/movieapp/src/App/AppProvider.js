import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";


export class AppProvider extends Component {

    render() {
        return (
            <React.StrictMode>
                <Router>
                    {this.props.children}
                </Router>
            </React.StrictMode>
        )
    }
}