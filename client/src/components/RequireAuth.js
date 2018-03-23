import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class RequireAuth extends Component {
    componentDidMount() {

      if (!this.props.user.logged_in) {
        this.props.history.push('/signup');
      }
    }

    render() {
      return !this.props.user.logged_in ? null : <ComposedComponent {...this.props}/>
    }
  }

  const mapStateToProps = state => {
    return {
      user: state.user
    };
  };

  return connect(mapStateToProps)(RequireAuth);
};
