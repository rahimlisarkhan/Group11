import { AppProvider } from "./AppProvider"
import './App.css';
import { Redirect, Route, Switch } from "react-router-dom";
import { Login } from "../pages/login";
import { RootPage } from "../pages";
import { route } from "../util/route";

function App() {
  return (
    <AppProvider>
      <Switch>
        <Route path={route.main.children.movie.href} component={RootPage} />
        <Route exact path={route.main.children.login.href} component={Login} />
        <Redirect from={route.main.href} to={route.main.children.movie.href} />
      </Switch>
    </AppProvider>
  );
}

export default App;
