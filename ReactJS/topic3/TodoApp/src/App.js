import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todo from './components/Todo';
import data from './data.json'


class App extends Component {
 
 
  constructor(){
    super()

    this.state = {
      data:data.footballer,
      team1:[],
      team2:[],
    }

    this.randomPlayers = this.randomPlayers.bind(this)
  }

  randomPlayers(){
    let array1 = []
    let array2 = [...this.state.data]
    
    while(array1.length < array2.length){
      let randomNum = Math.floor(Math.random() * array2.length)
      let randomDeletePlayer = array2.splice(randomNum,1)[0]
      array1 = [...array1 , randomDeletePlayer]
    }

    this.setState({
      team1:array1,
      team2:array2,
    })
  }

  render() {
    console.log(this.state);

    let teamPoint1 = this.state.team1.reduce((sum,item) => sum + item.power ,0)
    let teamPoint2 = this.state.team2.reduce((sum,item) => sum + item.power ,0)

    console.log(teamPoint1);
    return (
      <>
      {teamPoint1 < teamPoint2 ? <h1 className="text-warning">Lose Team 1</h1> : <h1 className="text-warning">Winner Team 1</h1> }
      <button onClick={this.randomPlayers}>Start</button>
      </>

      // <Todo/>
    );
  }

}

export default App;
