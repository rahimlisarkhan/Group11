import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Header from "./components/Header"
import React, { Suspense } from 'react';



const Home = React.lazy(()=>import("./feature/Home"));
const About = React.lazy(()=>import("./feature/About"));
const Product = React.lazy(()=>import("./feature/Product"));
const Todo = React.lazy(()=>import("./feature/Todo"));
const Contact = React.lazy(()=>import("./feature/Contact"));

function App(props) {

  return (
    <BrowserRouter>
     <Suspense fallback={<div>Loading...</div>}>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/product" component={Product}/>
        <Route exact path="/todo" component={Todo}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
     </Suspense>
     
    </BrowserRouter>
  );
}

export default App;
