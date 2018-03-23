import axios from 'axios';
export const SIGN_UP = 'SIGN_UP';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGED_OUT = 'LOGGED_OUT';
export const FETCHED_JOKES = 'FETCHED_JOKES';

export const fetchJokes = () => {
  console.log('fetching jokes');
  return (dispatch) => {
      const token = localStorage.getItem('token');
      console.log(token);
      axios.get('http://localhost:5000/api/jokes', {headers : {Authorization: token}})
      .then(res => {
        console.log(res);
        dispatch({
          type: FETCHED_JOKES,
          payload: res.data
        });
      });
  }
}


export const signUp = (newUser, history) => {
  if(newUser.username !== '' || newUser.password !== ''){
    return (dispatch) => {
      axios.post('http://localhost:5000/api/users', newUser)
      .then(res => {
        if(res.status === 200){
          alert('You have signed up successfully, please log in.');
          history.push('/');
        }
      });
    }
  }
}

export const signIn = (user, history) => {
  if(user.username !== '' || user.password !== ''){
    return (dispatch) => {
      axios.post('http://localhost:5000/api/login', user)
      .then(res => {
        if(res.status === 200){
          const token = res.data.token;
          localStorage.setItem('token', token);
          localStorage.setItem('userName', user.username);
          dispatch({
            type: LOGGED_IN,
            payload: user.username
          });
          history.push('/jokes');       
        }
      });
    }
  }
}

export const signOut = (history) => {
  localStorage.removeItem('token');
  history.push('/');
  return ({ type: LOGGED_OUT });
}

