import { Component } from "react";

export default class Home extends Component {

    constructor() {
        super()
        this.state = {
            count: 0,
            products: [],
            open:false
        }

        this.increment = this.increment.bind(this)
    }

    shouldComponentUpdate(nextProps,nextState){
        if(nextState.count !== this.state.count){
            return true
        }
        return false

    }
    
    componentDidMount(){
        console.log("Sorgu atildi data geldi");
    }

    componentWillUnmount(){
        console.log("Sehifeden cixis olundu");
    }

    componentDidUpdate(prevProps,prevState){
        if(prevState.count !== this.state.count){
            console.log("Count update olundu");
        }
    }

    decrement(){
        console.log("azaldi");
    }

    increment(){
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        console.log(this.props);
        console.log("render isledi");
        return (
            <>
                <h1>Home Page {this.state.count}</h1>
                <button onClick={this.increment}>Artir</button>
            </>
        )
    }
}