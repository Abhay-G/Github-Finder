import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/layout/users/Users';
import Search from './components/layout/users/Search';
import Cartoon from './components/layout/users/Cartoon';
import Alert from './components/layout/Alert';
import About from './components/layout/About';
import SingleUser from './components/layout/users/SingleUser';
import axios from 'axios';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlertState] = useState(null);

  //Search Github Users
  const searchUser = async (text) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };
  //Get Single Git User
  const getUser = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    setUser(res.data);
    setLoading(false);
  };
  //Get User Repos
  const getUserRepo = async (username) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    setRepos(res.data);
    setLoading(false);
  };
  //Clear users from state
  const clearUser = () => {
    setUsers([]);
    setLoading(false);
  };
  //Set Alert
  const setAlert = (msg, type) => {
    setAlertState({ msg, type });
    setTimeout(() => setAlertState(null), 2000);
  };
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={alert} />
          <Switch>
            <Route exact path='/'>
              <Fragment>
                <Search
                  searchUser={searchUser}
                  clearUser={clearUser}
                  showClear={users.length > 0 ? true : false}
                  setAlert={setAlert}
                />
                <Users loading={loading} users={users} />
                {users.length > 0 ? null : <Cartoon />}
              </Fragment>
            </Route>
            <Route exact path='/about'>
              <About />
            </Route>
            <Route
              exact
              path='/users/:login'
              render={(props) => (
                <SingleUser
                  {...props}
                  getUser={getUser}
                  getUserRepo={getUserRepo}
                  repos={repos}
                  user={user}
                  loading={loading}
                  setAlert={setAlert}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
