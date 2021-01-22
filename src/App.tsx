import React from 'react';
import './App.css';
import './components/UIkit/styles/index.css'
import {BrowserRouter as Router} from 'react-router-dom';


function App() {

    return (
        <Router>
            <div className='app'>
                <input type="text" className='input'/>
            </div>
        </Router>
    );
}

export default App;