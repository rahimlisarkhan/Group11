



class Jumbotron extends React.Component {

    constructor(props){
        super(props)

    }
    


    render() {
        console.log(this.props);
        
        return(
            <div>
                {/* {this.props.sekilTagi} */}
               { this.props.open ? <h1>Open Panel</h1> : "" }
                <h1>{this.props.title}</h1>
                <hr/>
                <p>Paragraph</p>
                {/* {props.children} */}
                <ul>
                   {this.props.products.map((item,index )=> <li key={`list-id-${index}`} >{item}</li>)}
                </ul>

                <button onClick={this.props.hello}>Salamla</button>
            </div>
        )
    }
}