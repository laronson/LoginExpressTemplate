import React, {Component} from 'react';
import axios from 'axios'

class CreateAccount extends Component {

  constructor(props) {
    super(props)

    this.state={createNameInput: "", createUsernameInput: "", createAddressInput: "", createPasswordInput: ""}
  }

  handleChange(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  createUser(e) {
    e.preventDefault();
    axios.post("/user/createUser", {
      name: this.state.createNameInput,
      address: this.state.createAddressInput,
      username: this.state.createUsernameInput,
      password: this.state.createPasswordInput
    }).then((response) => {
      console.log(response.data);
      if(response.data.status =="reject") {
        console.log("reject them!")
      }
      else if(response.data.status== "success") {
        console.log("success!");
        this.props.history.push("/")
      }
    })
  }

  render() {
    return (
      <div id="createAccountDiv">
        <h1>Create an account with us!</h1>

        <form id="createAccountForm" onSubmit={(e) => {this.createUser(e)}}>
          <label>Full Name:
            <input type="text" id="createNameInput" value={this.state.createNameInput} onChange={(e) => {this.handleChange(e)}}/>
          </label>
          <label>Address:
            <input type="text" id="createAddressInput" value={this.state.createAddressInput} onChange={(e) => {this.handleChange(e)}}/>
          </label>
          <label>Username:
            <input type="text" id="createUsernameInput" value={this.state.createUsernameInput} onChange={(e) => {this.handleChange(e)}}/>
          </label>
          <label>Password:
            <input type="text" id="createPasswordInput" value={this.state.createPasswordInput} onChange={(e) => {this.handleChange(e)}}/>
          </label>
          <input id="submitLogin" type="submit"/>
        </form>
      </div>
    )
  }
}

export default CreateAccount;
