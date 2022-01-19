import { Link, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import { NotFoundPage } from './pages/404';
import AboutPage  from './pages/about';
import AnimalSlug from './pages/animal/slug';
import { HomePage } from './pages/home';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <Switch>
          <Route exact path={"/"} component={HomePage} />
          <Route exact path={"/about"} render={() => <AboutPage />} />
          <Route exact path={"/animal"} render={() => <h1>Animal</h1>} />
          <Route exact path={"/animal/id=:randomsoz"} render={(props) => <AnimalSlug {...props}/>} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
