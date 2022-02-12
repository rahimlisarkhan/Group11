import { Component } from 'react';
import './App.css';
import { ButtonGroups } from './components/ButtonGroups';
import { Content } from './components/Content';
import { Header } from './components/Header';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      hello:"Salamss",
      count:0
    }

    this.sayHello = this.sayHello.bind(this)
    this.addCount = this.addCount.bind(this)
    this.removeCount = this.removeCount.bind(this)
    this.parentSetState = this.parentSetState.bind(this)
  }

  sayHello(){
    this.setState({hello:"Hola"})
  }

  addCount(){
    let yeniCount = this.state.count
    this.setState({count:yeniCount+=1})

  }

  removeCount(){
    let yeniCount = this.state.count
    this.setState({count:yeniCount <=0 ? 0 : yeniCount-=1})

  }

  parentSetState(text){
    this.setState({hello:text})
  }

  render() {

    return (
      <div className="App">
        <h1>{this.state.hello}</h1>

        {/* <Content count={this.state.count}/> */}
        {/* <ButtonGroups parentSetState={this.parentSetState} sayHello={this.sayHello} addCount={this.addCount} removeCount={this.removeCount} /> */}
        {/* <Header basket={this.state.count} /> */}
      </div>
    );
  }

}

export default App;
