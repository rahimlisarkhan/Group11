import React from "react"
import { Link, withRouter } from "react-router-dom"


class Header extends React.Component {

    render() {

        return (
            <div>
            <ul>
              <li>
                <button onClick={()=>this.props.history.push("/")}  style={{color:this.props.location.pathname === "/" ? "red" :""}}>
                  Home
                </button>
              </li>
              <li>
                <button onClick={()=>this.props.history.push("/about")} style={{color:this.props.location.pathname === "/about" ? "red" :""}}>
                  About
                </button>
              </li>
              <li>
                <button onClick={()=>this.props.history.goBack()}>
                  Go Back
                </button>
              </li>
            </ul>
          </div>
        )

    }
}

export default withRouter(Header)