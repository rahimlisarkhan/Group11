import './App.css';
const { Box } = require("./components/Box");


function component() {
    const element = document.createElement('div');
  
    element.innerHTML = Box()
  
    return element;
  }
  
  document.body.appendChild(component());