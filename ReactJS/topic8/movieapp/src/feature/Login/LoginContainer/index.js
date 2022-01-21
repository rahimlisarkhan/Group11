import { Container, Grid } from "@mui/material";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import { LoginForm } from "../LoginForm";


 class LoginContainer extends Component {

    constructor(props){
        super(props)

        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(form){
        // let url = "https/"
        // axios.post(url,form).then(()=>{
        //     localStorage.setItem("auth",res.data.acsess_token)
        //     this.props.history.push("/movie/home")

        // })
        localStorage.setItem("auth","true")
        this.props.history.push("/movie/home")
    }

    render() {
        return (
            <Container>
                <Grid container>
                    <Grid item md={12} className="center">
                        <LoginForm onSubmit={this.onSubmit} />
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default withRouter(LoginContainer)