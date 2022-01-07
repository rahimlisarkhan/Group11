import 'bootstrap/dist/css/bootstrap.min.css';
import { Component, Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { Dice } from './feature/dice/Dice';
import { Intro } from './feature/intro/Intro';




const image1 = 'https://upload.wikimedia.org/wikipedia/commons/c/c5/Dice-1.png'
const image2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8eeQ0gZL88nw2c6oFIcuLAESp8kX-sd010M51VYXOeT4IenZR_oiZOriPrYHpVFI-EtA&usqp=CAU'
const image3 = 'data:image/png;base64,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'
const image4 = 'https://e7.pngegg.com/pngimages/185/868/png-clipart-area-pattern-dice-1-rectangle-orange.png'
const image5 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4xcHXdDFvwzPq10xDI0cCvDo7INfdJwY4cXk4yPfN52DzEuDwGP1D-nlEieq_TA7TH1I&usqp=CAU'
const image6 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWTYKTieOBZTj9X3tad6N5VW40D3j86uSbAlQpGtA7zdkAi8VVc9XDTvJiUxn_sdCRVOc&usqp=CAU'

const dices ={
  image1,
  image2,
  image3,
  image4,
  image5,
  image6
}




class App extends Component {
  
  constructor(){
    super()

    this.state = {
      start:false,
      player:null,
      randomImage:null,
      randomPoint:null,

    }

    this.randomDice = this.randomDice.bind(this)
  }


  startGame = (text)=>{

    console.log("App js geldi",text);

    this.setState({
      start:true,
      player:text,
    })
  }

  randomDice(){
    let randomNum =Math.ceil(Math.random()*6)
    console.log(randomNum);
    let randomImage = dices[`image${randomNum}`]

    this.setState({randomImage:randomImage,randomPoint:randomNum})
  }


  render() {

    const { start,player } = this.state

    return (
      <Fragment>
            <Container className="text-white p-5 bg-dark">

        {!start ? <Intro startGame={this.startGame}/> 
              : <Dice player={player} 
                      randomDice={this.randomDice} 
                      image={this.state.randomImage} 
                      point={this.state.randomPoint}   />}
            </Container>
        
      </Fragment>
    );
  }

}

export default App;
