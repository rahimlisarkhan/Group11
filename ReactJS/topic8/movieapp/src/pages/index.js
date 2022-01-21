import { Component, Fragment } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./home";
import Page404 from "./404"
import { Layout } from "../components/Layout";
import { route } from "../util/route"


export class RootPage extends Component {

    render() {
        return (
            <Fragment>
                <Layout>
                    <Switch>
                        <Route exact path={route.main.children.movie.children.home.href} component={Home} />
                        <Redirect exact from={route.main.children.movie.href} to={route.main.children.movie.children.home.href}/>
                        <Route component={Page404} />
                    </Switch>
                </Layout>
            </Fragment>
        )
    }
}