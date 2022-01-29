import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from "./components/Header"
import Home from "./feature/Home"
import About from "./feature/About/About"
import { AppProvider } from './providers/appProvider';

function App() {

  return (
    <BrowserRouter>
      <AppProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
