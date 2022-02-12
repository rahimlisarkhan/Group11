


import React from 'react';
import Layout from '../../components/Layout';
import axios from 'axios'
import MovieCard from "../../components/Card/Card"


class Home extends React.Component {


    constructor(){
        super()

        this.state = {
            movieAll:null
        }
    }

    componentDidMount(){

        this.getMovie();
    }


    getMovie(){

        axios.get('http://www.omdbapi.com/?s=movie&apikey=a407a7b3').then(res=>{
            console.log(res);
            this.setState({movieAll:res.data.Search})
        })

    }

    render() {

        if(!this.state.movieAll){
            return <h1>Loading...</h1>
        }

        return (
            <Layout>
                {this.state.movieAll.map(movie =><MovieCard key={movie.imdbID} {...movie} /> )}
            </Layout>
        )
    }
}

export default Home
