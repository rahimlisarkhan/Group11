import { Component } from "react";
import { Link } from "react-router-dom";


export default class Header extends Component {
    render() {
        return (

            <div style={{display: "flex"}}>
                <h1>Logo</h1>
                <ul style={{display: "flex"}}>
                    <li>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/product">
                            Product
                        </Link>
                    </li>
                </ul>

            </div>
        )
    }
}