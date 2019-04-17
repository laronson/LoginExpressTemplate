import React, {Component} from 'react';
import axios from 'axios'

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {usernameInput: "", passwordInput: "", loginFailed: false}
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    axios.post("/user/login", {
      username: this.state.usernameInput,
      password: this.state.passwordInput
    }).then((response) => {
      console.log(response.data)
      if(response.data.message == "reject") {
        this.setState({loginFailed: true})
      } else if (response.data.message == "success") {
        this.props.history.push("/response.data.")
      }
    })
  }

  render() {
    return(
      <div id="loginFormDiv">
        <h1>Welcome To the Site!</h1>

        <form id="loginForm" onSubmit={(e) => {this.handleSubmit(e)}}>
        <h3>Please Log in</h3>

          {this.state.loginFailed ? <h6>Login Failed</h6> : null}
          <div className="form-input">
          <label for="usernameInput" > username: </label>
            <input id="usernameInput"  type="text" value={this.state.usernameInput} onChange={(e) => {this.handleChange(e)}}/>
            </div>

          <div className="form-input">
          <label> password: <t/></label>
          <input id="passwordInput" type="password" onChange={(e) => {this.handleChange(e)}}/>
          </div>
          <input id="submitLogin" className="button" type="submit"/>
        </form>

        <a href="/createAccount">Dont have an account? Create one here!</a>
      </div>
    )
  }
}

export default LoginForm;
