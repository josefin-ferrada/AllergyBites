import React from 'react';
import './app.css';
import login from './Components/Login' 
import { BrowserRouter , Route } from 'react-router-dom';
import Register from './Components/Register';


function App() {
  return (
  <BrowserRouter>
    <Route path="/" component={login}/>
    <Route path="/Register" component={Register}/>
  </BrowserRouter>
  );
}

export default App;
