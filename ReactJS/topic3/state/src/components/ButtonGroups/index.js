import { Component } from "react";



export class ButtonGroups extends Component {

    constructor(props){
        super(props);
    }

    render() {
        let {sayHello,removeCount,addCount,parentSetState } = this.props

        return (
            <>
                <button onClick={sayHello}>Salami Deyis</button>
                <button onClick={removeCount}>Azaldan</button>
                <button onClick={addCount}>Artir</button>
                <button onClick={()=> parentSetState("Merhaba")}>Parenti deyisen</button>
            </>
        )
    }
}