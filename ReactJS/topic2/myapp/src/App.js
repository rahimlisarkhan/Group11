class App extends React.Component{

    imgTag = <img width="200" src="https://www.gardendesign.com/pictures/images/675x529Max/site_3/helianthus-yellow-flower-pixabay_11863.jpg"/>


    render() {
        const salamla = () => {
            alert('salam')        
        }
        
        return (
           
        <React.Fragment>
             <h1>Hello React</h1>
            {/* <Jumbotron sekilTagi={this.imgTag} title={"Xeberler"} products={[1,15,30,2,3,4]} address={{name:"Murad"}} number={5} open={false} hello={salamla} /> */}
            <Button color={"red"} bg={"yellow"}>
                Add Project
            </Button>
            <Button color={"white"} bg={"red"}>
                Delete Item
            </Button>
            <Button color={"white"} bg={"blue"}>
                Order
            </Button>

            <Button >
                New
            </Button>
        </React.Fragment>

        )
    }
}
