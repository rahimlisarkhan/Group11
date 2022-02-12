import { Component } from "react";
import { Slider } from "./Slider/Slider";
import slide1 from "./Image/a.jpeg";
import slide2 from "./Image/b.jfif";
import slide3 from "./Image/c.jpg";
import slide4 from "./Image/d.jpg";


const slideImages = {
  image1:slide1,
  image2:slide2,
  image3:slide3,
  image4:slide4,
} 
class App extends Component {

  render() {
    return (
      <div className="App">
        <Slider slideData={slideImages} />
      </div>
    );
  }
}

export default App;
