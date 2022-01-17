import { Component, Fragment } from "react";
import axios from "axios";
import { JokesCard } from "../JokesCard/JokesCard";




export class JokesContainer extends Component {

    constructor() {
        super()

        this.state = {
            allJokes: null
        }

        this.onVoted = this.onVoted.bind(this)
    }

    componentDidMount() {
        this.getJokes()
    }


    getJokes() {
        axios.get("https://icanhazdadjoke.com/search?page=1&limit=10", {
            headers: {
                "Accept": "application/json"
            }
        }).then(response => {
            let { data: { results } } = response

            results.map(item => {
                return {
                    id: item.id,
                    joke: item.joke,
                    count: 0
                }
            })

            this.setState({ allJokes: results })
        })
    }


    onVoted(index, count) {

        let newJokesData = [...this.state.allJokes]

        newJokesData[index].count = count

        newJokesData.sort((a,b)=> b.count -a.count)
     
        this.setState({allJokes:newJokesData})

    }



    render() {
        console.log(this.state.allJokes);

        if (!this.state.allJokes) {
            return <h1>Loading...</h1>
        }

        return (
            <Fragment>
                <h1>Jokes List</h1>
                <div>
                    {this.state.allJokes.map((jokes, index) => <JokesCard onVoted={this.onVoted} sira={index} key={`jokes-${jokes.id}`} data={jokes} />)}
                </div>
            </Fragment>
        )
    }
}