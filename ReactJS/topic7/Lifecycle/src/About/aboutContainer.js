import React from "react"
import { Auth } from "../components/HOC/authRequered";


 class AboutContainer extends React.Component {

    constructor() {
        super();

        this.state = {
            count: 4,
            bookName:"Dan Brown",
            goster:true
        }
    }

    // componentWillMount() {
    //     console.log("Component birazdan gorsenecek");
    // }

    componentDidMount() {
        console.log("Componentartiq hazirdi");
        this.getBookData()
    }

    // shouldComponentUpdate(nextProps,nextState){
    //     // if(nextProps.color === this.props.color){
    //     //     return false
    //     // }

    //         if(nextState.bookName === this.state.bookName){
    //             return false
    //         }

    //         return true
    // }

    // componentWillUpdate(){
    //     console.log("Stateti deyismek ucun nese etdi bas verecek");
    // }


    componentDidUpdate(prevProps,prevState){
        console.log("Component update Olundu");
        console.log(prevState);

        if(prevState.basketAmount !== this.state.basketAmount){
            

        }
    }


    getBookData() {

        setTimeout(()=>{
            this.setState(prevState => {
                return {
                    count: 10,
                    // goster:false
                }
            })

        },2000)
    }

    render() {
        console.log('Render Isledi');
        
        return (
            <>
                <h1>About Container {this.state.count}</h1>
            </>
        )

    }
}

export default Auth(AboutContainer)