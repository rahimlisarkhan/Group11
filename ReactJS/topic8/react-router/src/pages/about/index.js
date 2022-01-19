import React from "react"
import { Link, Route, Switch, withRouter } from "react-router-dom"



 class AboutPage extends React.Component {

    render() {
        return(
            <>
            <h1>About Page</h1>
            <div>
                <Link exact="true" to="about/list">list</Link>
                <br/>
                <Link exact="true" to="about/desc">desc</Link>
            </div>
            <div>

            {/* <Switch>
                  <Route exact path={"/about/list"} render={()=><h1>About list</h1>} />
                  <Route exact path={"/about/desc"} render={()=><h1>About desc</h1>} />
             </Switch> */}
            </div>
            </>
        )
    }
    
}

export default AboutPage