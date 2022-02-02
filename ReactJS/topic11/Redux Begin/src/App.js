import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./feature/Home"
import About from "./feature/About/About"
import { Provider } from "react-redux"
import { store } from "./store"

function App() {

  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
