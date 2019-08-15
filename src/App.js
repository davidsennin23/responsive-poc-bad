import React from 'react';
import './App.css';
import MainPage from './components/MainPage';
import {buildApp} from './app/AppBuilder';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainPage/>
    </Router>
  );
}

export default buildApp(App);
