import React from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions/index';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  state = {
    username: '',
    password: ''
  }
  handleSignUp = () => {
      this.props.signUp(this.state, this.props.history); 
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  
  render() {
    return (
      <div className="signup">
        <div className="app-title">Dad's Jokes</div>
        <div className="signup-title">Sign Up</div>
        <input type="text" name="username" value={this.state.username} 
        placeholder="Username" onChange={this.handleOnChange}/><br />

        <input type="password" name="password" value={this.state.password} 
        placeholder="Password" onChange={this.handleOnChange}/><br />

        <button onClick={() => {this.handleSignUp()}}>Sign up</button><br />
        <div>Already have an account?</div>
        <Link to="/"><button className="signin">Sign in</button><br /></Link>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  } 
}

export default connect(mapStateToProps, { signUp })(SignUp);