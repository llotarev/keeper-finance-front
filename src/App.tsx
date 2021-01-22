import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {Button, Form} from 'react-bootstrap';


function App() {

    return (
        <Router>
            <div className='app'>
                <Form.Control placeholder='sds'/>
                <Button>
                    Текс
                </Button>
            </div>
        </Router>
    );
}

export default App;