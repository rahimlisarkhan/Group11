import { Card } from "./components/Card";
import "./style.css"

function App() {
    const element = document.createElement('div');
    
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = `
        <h1>Hello</h1>
    
    `

    return (
        element
    );
  }
  
  document.body.appendChild(App());