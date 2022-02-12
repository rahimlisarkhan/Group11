import React from "react"



 class HomeCarousel extends React.Component{

    componentWillUnmount(){
        console.log("Home Carousel Men artiq terk edildim");

    }

    render(){    
        console.log("red");
        return(
            <>
            <h1 style={{color:this.props.color}}> HomeCarousel</h1>
            <button onClick={this.handeClick}>Test</button>
            </>
        )
    }
}

export default React.memo(HomeCarousel)