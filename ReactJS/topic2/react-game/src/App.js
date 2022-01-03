import './App.css';
import { Component, Fragment } from 'react';
import Winner from './components/Winner';
import muradData from './data/person.json'


class App extends Component{

  randomNumber(){
    let random = Math.ceil(Math.random()*10)
    return random
  }

  render() {

    return (
      <Fragment>
        <h1>Hello Game</h1>
        <Winner number={this.randomNumber()} />
        <ul>
          {muradData?.personals.map((user,index)=><li key={index}>{user.full_name} {user.age}</li>)}
        </ul>
      </Fragment>
    );

}
}

export default App;
