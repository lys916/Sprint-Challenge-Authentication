import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions/index';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleSignIn = () => {
      this.props.signIn(this.state, this.props.history);
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  render() {
    return (
      <div className="login">
        <div className="title">Dad Jokes</div>
        <input name="username" value={this.state.username} 
        placeholder="Username" onChange={this.handleOnChange}/><br />

        <input name="password" type="password" value={this.state.value} 
        placeholder="Password" onChange={this.handleOnChange}/><br />

        <button className="signin" onClick={() => {this.handleSignIn()}}>Sign in</button><br />
        <div>Don't have an account?</div>
        <Link to="/signup"><button>Sign up</button></Link><br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  } 
}

export default connect(mapStateToProps, { signIn })(Login);