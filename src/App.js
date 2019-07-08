import React from 'react';
import './app.css';
import 'bootstrap/dist/css/bootstrap.css';
import login from './Components/Login' 
import { BrowserRouter , Route, Switch } from 'react-router-dom';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';


function App() {
  return (
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={login}/>
    <Route exact path="/Register" component={Register}/>
    <Route exact path="/Dashboard" component={Dashboard}/>
    </Switch>
  </BrowserRouter>
  );
}

export default App;
