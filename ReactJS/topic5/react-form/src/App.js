import React from 'react';
import './App.css';
import { Card } from './components/Card';


class App extends React.Component {

  constructor() {
    super()
    this.state = {
      netice: null,
      email: "",
      validator:false
    }

    this.inputUsername = React.createRef();
    this.inputPassword = React.createRef();

    this.onSubmit = this.onSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.zibiliAt = this.zibiliAt.bind(this)
  }

  handleChange(e) {
    console.log(e.target.value);

    this.setState({
      email: e.target.value
    })
  }

  onSubmit() {
    let valueUser = this.inputUsername.current.value
    let valuePassword = this.inputPassword.current.value

    console.log(valueUser,valuePassword);

    if(valueUser.trim() === "" || valuePassword.trim() === "" ){
      
      this.setState({
        validator:true
      })
      return

    }


    let formData = {
      username: valueUser,
      password: valuePassword
    }

    this.setState({
      netice: formData,
      validator:false
    })

    console.log(formData);

    this.inputUsername.current.value = ""

  }

  zibiliAt(cavab){
      console.log("Ne is gordun");
      console.log(cavab);
  }

  render() {
    console.log(this.state.validator);
    return (
      <div className="App">
        <input ref={this.inputUsername} type="text" placeholder="username" />
        <br />
        <input ref={this.inputPassword} type="password" placeholder="password" />
        <br />
        <input onChange={this.handleChange} type="email" placeholder="email" />
        <br />
        <small>{this.state.email.length} /10</small>
        <br />
        <button onClick={this.onSubmit}>Send</button>
        <br />

        {this.state.validator && <small>Please form check</small>}
        <br />
        <Card zibiliAt={this.zibiliAt} info={this.state.netice}  />
      </div>
    );
  }

}

export default App;
