import React from 'react';
import { API_BASE } from '../constants';

class Signup extends React.Component{
  state = {
    username: "",
    password: "",
    passwordConfirmation: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.password === this.state.passwordConfirmation){
      // some stuff
    } else {
      alert('You messed up. Try again. Get better at typing.')
    }

  }


  render(){
    return (
      <div className="signup">
        <form className="auth-form" onSubmit={this.handleSubmit}>
          <input name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
          <input name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" type="password"/>
          <input name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleChange} placeholder="Password Confirmation" type="password"/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Signup;