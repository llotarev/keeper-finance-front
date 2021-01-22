import React from 'react';
import './App.css';
import './components/UIkit/styles/index.css'
import {BrowserRouter as Router} from 'react-router-dom';
import {Input} from './components/UIkit/Input';
import {Button} from "./components/UIkit/Button";


function App() {

    return (
        <Router>
            <div className='app'>
                <Input content='right' placeholder='Name' defaultValue='sds'/>
                <Button content="left">
                    Текст
                </Button>
            </div>
        </Router>
    );
}

export default App;