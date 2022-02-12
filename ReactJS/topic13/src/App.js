import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { About } from './page/About';
import { Home } from './page/Home';
import { store } from './store/index'
import { Provider } from 'react-redux'
import { ThemeProvider } from "styled-components";
import { theme } from './style/theme';

function App() {


  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div>
          <Link to="/">
            Home
          </Link>
          <Link to="/about">
            About
          </Link>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Provider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
