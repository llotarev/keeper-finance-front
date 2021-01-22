import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {routes} from './routes';
import {Finance} from "./components/Finance";


export function App() {

    return (
        <Router>
            <div className='app'>
                <Route path={routes.root}>
                    <Finance/>
                </Route>
            </div>
        </Router>
    );
}
