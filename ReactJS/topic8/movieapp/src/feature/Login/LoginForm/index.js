import { Button, TextField, Typography } from "@mui/material";
import { Component, Fragment } from "react";



export class LoginForm extends Component {

    inputStyle = {
        width: 600,
        color: "#ffff",
    }

    constructor(){
        super()

        this.handleForm = this.handleForm.bind(this)
    }
    handleForm(){
        this.props.onSubmit({})
    }

    render() {

        return (
            <Fragment>
                <Typography variant="h2" >
                    Login
                </Typography>
                <br />
                <br />

                <TextField
                    error={false}
                    id="outlined-error-helper-text"
                    label={"Username"}
                    size={"medium"}
                    style={this.inputStyle}
                    color="success"
                    variant="outlined"
                // defaultValue="Hello World"
                // helperText="Incorrect entry."
                />
                <br />
                <br />

                <TextField
                    error={false}
                    id="outlined-error-helper-text"
                    label={"Password"}
                    size={"medium"}
                    style={this.inputStyle}
                    color="success"
                    variant="outlined"
                    type="password"
                // defaultValue="Hello World"
                // helperText="Incorrect entry."
                />
                <br />
                <br />
                <Button onClick={this.handleForm} variant="contained" size="large" color="secondary" >
                    Login
                </Button>
            </Fragment>
        )
    }
}

