import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import Home from "./feature/Home"
import About from "./feature/About"
import Product from "./feature/Product"

function App() {
  
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/product" component={Product}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
