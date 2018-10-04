import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Callback from './components/Callback';
import Auth from './Auth';
import history from './components/history';
import Catalog from './components/Catalog';
import Transcript from './components/Transcript';
import NavBar from './components/NavBar'; 


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      
    <Router history={history} component={App}>
      <div>

        <Route path="/" render={(props) => <App auth={auth} {...props} />} />
        <Route exact path="/home" component={Home}/>
        <Route path="/catalog" component={Catalog}/>
        <Route path="/transcript" component={Transcript}/>
        <Route path="/callback" render={(props) => {
          handleAuthentication(props);
          return <Callback {...props} /> 
        }}/>
      </div>
    </Router>
  );
}