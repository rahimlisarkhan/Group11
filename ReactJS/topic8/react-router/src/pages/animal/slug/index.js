import React from "react"

class AnimalSlug extends React.Component {

    render() {

        console.log(this.props);
        return(
            <h1>{this.props.match.params.randomsoz}</h1>
        )
    }
}

export default AnimalSlug