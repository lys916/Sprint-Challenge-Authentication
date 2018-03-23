import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions/index';
import { fetchJokes } from '../actions/index';
import { Link } from 'react-router-dom';

class Jokes extends React.Component {

  componentDidMount(){
    this.props.fetchJokes();
  }

  handleSignOut = () => {
    this.props.signOut(this.props.history)
  }
  
  render() {
    return (
      <div className="jokes">

        <div>Welcome, {this.props.user.userName}!</div>
        <button onClick={() => {this.handleSignOut()}}>Sign Out</button><br/>
        { this.props.jokes.map((joke, i)=> {
          return (
            <div key={i} className="joke">
              <div className="setup">{joke.setup}</div>
              <div className="punchline">{joke.punchline}</div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { user, jokes } = state;
  return {
    user,
    jokes
  } 
}

export default connect(mapStateToProps, { signOut, fetchJokes })(Jokes);