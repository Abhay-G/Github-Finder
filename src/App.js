import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import About from './components/layout/About';
import Home from './components/layout/Home';
import NotFound from './components/layout/NotFound';
import SingleUser from './components/layout/users/SingleUser';
import { GithubProvider } from './context/github/GithubContext';
import { AlertProvider } from './context/alert/AlertContext';
import './App.css';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container'>
              <Alert alert={alert} />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/users/:login' component={SingleUser} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
