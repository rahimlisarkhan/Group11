import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from './pages/home';
import About from './pages/about';
import MovieSlug from './pages/movie'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/movie/title=:name'} component={MovieSlug} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
