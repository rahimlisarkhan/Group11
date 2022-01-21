import { Component, Fragment } from "react";
import Header from "../Header/Header"


export class Layout extends Component {
    render() {
        return(
              <Fragment>
                  <Header/>
                  {this.props.children}
              </Fragment>  
        )
    }
}