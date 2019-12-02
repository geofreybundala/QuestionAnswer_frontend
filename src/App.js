import React from 'react';
import './assets/css/App.css';
import Header from './components/header';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">
            <Header/>
            <Welcome/>
    </div>
  );
}

export default App;
